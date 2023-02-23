import { LayoutType } from '../layout/types'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    loginView?: boolean
    requiresLocale?: boolean
    layout: LayoutType
  }
}
