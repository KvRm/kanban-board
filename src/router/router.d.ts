import { LayoutType } from '../types/common'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    loginView?: boolean
    layout?: LayoutType
  }
}
