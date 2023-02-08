import { LayoutType } from '../layout/layout.type'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    loginView?: boolean
    requiresLocale?: boolean
    layout: LayoutType
  }
}
