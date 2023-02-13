import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../pages/MainPage.vue'),
    name: 'storefront',
    meta: {
      requiresAuth: true,
      requiresLocale: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../pages/MyTasksPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/create-board',
    name: 'create-board',
    component: () => import('../pages/CreateBoardPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
      layout: 'DefaultLayout',
    },
  },
]
