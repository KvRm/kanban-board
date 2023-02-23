import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { SupportLocalesEnum } from '../locales/types'
import { useAuthStore } from '../modules/login/stores/authStore'
import { startsWithLocaleWithoutSlash } from './helpers'
import { useLocale } from '../modules/LocaleSwitcher/composables/useLocale'
import { i18n } from '../plugins/i18n'

export const middleware = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { loadAndSetLocaleMessages } = useLocale()
  const { isLoggedIn } = useAuthStore()

  const availableLocales = [...Object.values(SupportLocalesEnum)]
  const locale = to.params.locale as string

  let nextRoute: Partial<RouteLocationNormalized> | null = null

  if (availableLocales.includes(locale as SupportLocalesEnum)) {
    if (startsWithLocaleWithoutSlash(to.path, availableLocales)) {
      nextRoute = { path: to.path + '/' }
    }
  } else {
    nextRoute = { path: `/en/` }
  }

  if (to.meta.requiresAuth) {
    const loggenIn = await isLoggedIn()
    if (!loggenIn) {
      nextRoute = { path: `/${locale}/login` }
    }
  }

  if (to.meta.loginView) {
    const loggenIn = await isLoggedIn()
    if (loggenIn) nextRoute = { path: `/${locale}/` }
  }

  if (i18n.global.locale.value !== locale) {
    await loadAndSetLocaleMessages(locale)
    i18n.global.locale.value = locale
  }

  nextRoute ? next(nextRoute as RouteLocationNormalized) : next()
}
