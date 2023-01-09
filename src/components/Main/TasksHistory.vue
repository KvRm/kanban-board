<template>
  <div
    class="flex flex-col w-full min-h-48 bg-primary-soft py-2 px-4 box-border shadow-lg rounded-card mb-8 overflow-hidden"
  >
    <span class="font-bold mb-2">Последние задачи:</span>
    <p class="mb-3" v-for="(task, ind) in tasks" :key="ind">
      <TheTaskLink :task-link="task" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TaskLink } from '../../types/task'
import TheTaskLink from '../common/TheTaskLink.vue'

const tasks = ref<TaskLink[]>([
  {
    title: 'TaskLink 1',
    id: '0',
    prefix: 'JAP',
    board: {
      id: '212',
    },
  },
  {
    title: 'TaskLink 2',
    id: '0',
    prefix: 'JAP',
    board: {
      id: '212',
    },
  },
  {
    title: 'TaskLink 3',
    id: '0',
    prefix: 'JAP',
    board: {
      id: '212',
    },
  },
  {
    title: 'TaskLink 4',
    id: '0',
    prefix: 'JAP',
    board: {
      id: '212',
    },
  },
  {
    title: 'TaskLink 5',
    id: '0',
    prefix: 'JAP',
    board: {
      id: '212',
    },
  },
])
</script>
