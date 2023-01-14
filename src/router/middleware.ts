import { RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '../services/firebase/authStateChecker'

export const middleware = async (to: RouteLocationNormalized) => {
  const loggenIn = await isLoggedIn()

  if (to.meta.requiresAuth) {
    return loggenIn ? true : { name: 'login' }
  }

  if (to.meta.loginView) {
    if (loggenIn) return { name: 'main' }
  }
}
