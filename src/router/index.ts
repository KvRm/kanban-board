import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { middleware } from './middleware'
import { routes as storefrontRoutes } from '../modules/storefront/router'
import { routes as boardRoutes } from '../modules/board/router'

const routes: Array<RouteRecordRaw> = [
  ...storefrontRoutes,
  ...boardRoutes,
  {
    path: '/login',
    name: 'login',
    component: () => import('../modules/storefront/pages/MainPage.vue'),
    meta: {
      loginView: true,
      layout: 'EmptyLayout',
      requiresLocale: true,
    },
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   name: 'error-404',
  //   component: () => import('@/layout/Error404Layout.vue'),
  //   meta: {
  //     error: true,
  //     layout: 'EmptyLayout',
  //   },
  // },
]

routes.forEach((route) => {
  if (route.meta?.requiresLocale) {
    route.path = '/:locale' + route.path
    route.props = true
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(middleware)

export default router
