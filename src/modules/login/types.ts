import { RouteLocationNormalizedLoaded } from 'vue-router'

export type AuthFormType = 'LoginForm' | 'RestorePasswordForm'

export type AuthRoute = Record<'register' | 'authorizate', AuthRouteProps>

export interface AuthRouteProps {
  label: string
  route: Pick<RouteLocationNormalizedLoaded, 'path' | 'query'>
}

export interface AuthRequest {
  email: string
  password: string
}
