<template>
  <div
    class="flex flex-col w-full min-h-48 bg-primary-soft py-2 px-4 box-border shadow-lg rounded-card mb-8 overflow-hidden"
  >
    <span class="font-bold mb-2">Последние задачи:</span>
    <p class="mb-3" v-for="(task, ind) in tasks" :key="ind">
      <router-link class="hover:text-blue" :to="`task/${task.id}`">
        {{ task.title + ` ${ind}` }}
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Link } from '../../types'

const tasks = ref<Link[]>([
  {
    title: 'TaskLink',
    id: '0',
  },
  {
    title: 'Taskid',
    id: '0',
  },
  {
    title: 'Taskid',
    id: '0',
  },
  {
    title: 'Taskid',
    id: '0',
  },
  {
    title: 'Taskid',
    id: '0',
  },
])
</script>
