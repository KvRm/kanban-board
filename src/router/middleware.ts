import { RouteLocationNormalized } from 'vue-router'
import { SupportLocalesEnum } from '../components/Header/locale.types'
import { startsWithLocaleWithoutSlash } from './helpers'

export const middleware = async (to: RouteLocationNormalized) => {
  const availableLocales = [...Object.values(SupportLocalesEnum)]
  const locale = to.params.locale as string

  if (locale === 'login') {
    return { path: '/en/login' }
  }

  if (availableLocales.includes(locale as SupportLocalesEnum)) {
    if (startsWithLocaleWithoutSlash(to.path, availableLocales)) {
      return { path: to.path + '/' }
    }
  } else {
    return { path: '/en/' }
  }

  // const loggenIn = await isLoggedIn()
  // if (!i18n.availableLocales.includes(paramsLocale)) {
  //   await loadLocaleMessages(paramsLocale)
  // }
  // setI18nLanguage(paramsLocale)
  // if (to.meta.requiresAuth) {
  //   return loggenIn ? true : { name: 'login' }
  // }
  // if (to.meta.loginView) {
  //   if (loggenIn) return { name: 'main' }
  // }
}
