import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { middleware } from './middleware'

const routes: Array<RouteRecordRaw> = [
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
  {
    path: '/board/:boardId',
    name: 'board',
    component: () => import('../pages/BoardPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/board/:boardId/:taskId',
    name: 'task',
    component: () => import('../pages/TaskPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginPage.vue'),
    meta: {
      loginView: true,
      layout: 'EmptyLayout',
      requiresLocale: true,
    },
  },
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
