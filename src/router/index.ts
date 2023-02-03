import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { middleware } from './middleware'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../modules/storefront/pages/MainPage.vue'),
    name: 'storefront',
    meta: {
      requiresAuth: true,
      requiresLocale: true,
    },
  },
  // {
  //   path: '/board/:boardId',
  //   name: 'board',`
  //   component: () => import('../views/BoardView.vue'),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  {
    path: '/board/:boardId/:taskId',
    name: 'task',
    component: () => import('../modules/storefront/pages/MainPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
    },
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../modules/storefront/pages/MyTasksPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
    },
  },
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
