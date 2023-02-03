import { LayoutType } from '../types/common'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    loginView?: boolean
    requiresLocale?: boolean
    layout?: LayoutType
  }
}
