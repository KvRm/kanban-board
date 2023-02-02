import { RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '../services/firebase/authStateChecker'
import { loadLocaleMessages, setI18nLanguage } from '../composables/locale'

export const middleware = async (to: RouteLocationNormalized) => {
  const routeLocale = (to.params?.locale as string) || 'en'

  setI18nLanguage(routeLocale)
  await loadLocaleMessages(routeLocale)

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
