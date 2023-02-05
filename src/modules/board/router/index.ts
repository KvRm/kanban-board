import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/board/:boardId',
    name: 'board',
    component: () => import('../pages/BoardPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
    },
  },
  {
    path: '/board/:boardId/:taskId',
    name: 'task',
    component: () => import('../pages/TaskPage.vue'),
    meta: {
      requiresAuth: true,
      requiresLocale: true,
    },
  },
]
