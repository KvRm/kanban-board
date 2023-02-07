import { RouteLocationNormalized } from 'vue-router'
import { SupportLocalesEnum } from '../components/Header/locale.types'
import { useAuth } from '../services/firebase/auth'
import { startsWithLocaleWithoutSlash } from './helpers'

export const middleware = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  const availableLocales = [...Object.values(SupportLocalesEnum)]
  const locale = to.params.locale as string
  const { isLoggedIn } = useAuth()

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

  if (to.meta.requiresAuth) {
    if (from.name === 'login') return true

    const loggenIn = await isLoggedIn()
    return loggenIn ? true : { name: 'login' }
  }
  
  if (to.meta.loginView) {
    const loggenIn = await isLoggedIn()
    if (loggenIn) return { name: 'storefront' }
  }
}
