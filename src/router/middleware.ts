import type { RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '../services/firebase/authStateChecker'

export const routerGuard = async (to: RouteLocationNormalized) => {
  const loggenIn = await isLoggedIn()

  if (to.meta.needAuth) {
    return loggenIn ? true : { name: 'login' }
  }

  if (to.meta.login) {
    if (loggenIn) return { name: 'main' }
  }
}
