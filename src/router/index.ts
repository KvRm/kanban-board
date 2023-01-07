import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routerGuard } from './middleware'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    meta: {
      needAuth: true,
    },
  },
  {
    path: '/board/:board',
    name: 'board',
    component: () => import('../views/BoardView.vue'),
    meta: {
      needAuth: true,
    },
  },
  // {
  //   path: '/board/:board/:task',
  //   name: 'task',
  //   component: () => import('../views/TaskView.vue'),
  //   meta: {
  //     needAuth: true,
  //   },
  // },
  {
    path: '/my-tasks',
    name: 'my-tasks',
    component: () => import('../views/MyTasksView.vue'),
    meta: {
      needAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/MainView.vue'),
    meta: {
      login: true,
      layout: 'EmptyLayout',
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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach(routerGuard)

export default router
