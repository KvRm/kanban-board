import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { SupportLocalesEnum } from '../components/Header/locale.types'
import { useAuth } from '../services/firebase/auth'
import { startsWithLocaleWithoutSlash } from './helpers'
import { useLocale } from '../composables/useLocale'
import { i18n } from '../plugins/i18n'

export const middleware = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { loadLocaleMessages } = useLocale()
  const { isLoggedIn } = useAuth()

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

  await loadLocaleMessages(locale)
  i18n.global.locale.value = locale

  nextRoute ? next(nextRoute as RouteLocationNormalized) : next()
}
