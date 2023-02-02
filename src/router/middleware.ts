import { RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '../services/firebase/authStateChecker'
import { useI18n } from 'vue-i18n'
import { loadLocaleMessages, setI18nLanguage } from '../i18n'

export const middleware = async (to: RouteLocationNormalized) => {
  const i18n = useI18n({ useScope: 'global' })
  // const loggenIn = await isLoggedIn()

  const paramsLocale = Array.isArray(to.params.locale)
    ? to.params.locale[0]
    : to.params.locale

  console.log(paramsLocale || 'sasaas')

  if (!i18n.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(paramsLocale)
  }

  setI18nLanguage(paramsLocale)

  // if (to.meta.requiresAuth) {
  //   return loggenIn ? true : { name: 'login' }
  // }

  // if (to.meta.loginView) {
  //   if (loggenIn) return { name: 'main' }
  // }
}
