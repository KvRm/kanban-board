<template>
  <table class="table-fixed w-full max-md:border-none">
    <thead class="max-md:hidden">
      <tr class="max-md:block">
        <th v-for="category in TableCategories" :key="category">
          {{ category }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TaskTableItem v-for="task in tasks" :task="task" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TaskCriticalLvl } from '../../types/index'
import type { MyTask } from './my-task.type'
import { TableCategories } from './table-task-item.type'
import TaskTableItem from './TaskTableItem.vue'

const tasks = ref<MyTask[]>([
  {
    id: '1',
    title: 'Some task',
    criticalLvl: TaskCriticalLvl.high,
    completeDate: '22.11.2023',
    board: {
      id: '1',
      title: 'board1',
      statusSection: 'В работе',
    },
    author: {
      id: '1',
      name: 'Some name',
    },
  },
])
</script>
