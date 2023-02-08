import { RouteLocationNormalized } from 'vue-router'
import { SupportLocalesEnum } from '../components/Header/locale.types'
import { useAuth } from '../services/firebase/auth'
import { startsWithLocaleWithoutSlash } from './helpers'

const { isLoggedIn } = useAuth()

export const middleware = async (to: RouteLocationNormalized) => {
  const availableLocales = [...Object.values(SupportLocalesEnum)]
  const locale = to.params.locale as string

  if (availableLocales.includes(locale as SupportLocalesEnum)) {
    if (startsWithLocaleWithoutSlash(to.path, availableLocales)) {
      return { path: to.path + '/' }
    }
  } else {
    return { path: `/en/` }
  }

  if (to.meta.requiresAuth) {
    const loggenIn = await isLoggedIn()
    if (loggenIn) {
      return true
    } else {
      return { path: `/${locale}/login` }
    }
  }

  if (to.meta.loginView) {
    const loggenIn = await isLoggedIn()
    if (loggenIn) return { path: `/${locale}/` }
  }
}
