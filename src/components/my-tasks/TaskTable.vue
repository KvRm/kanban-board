<template>
  <TaskTableSearchSort />
  <table class="table-fixed w-full max-lg:border-none">
    <thead class="max-lg:hidden lg:border-b border-color-soft">
      <tr class="max-lg:block">
        <th class="p-1 pb-3" v-for="category in TableCategories" :key="category">
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
import { TaskCriticalLvlEnum } from '../../types/index'
import type { MyTask } from './my-task.type'
import { TableCategories } from './table-task-item.type'
import TaskTableItem from './TaskTableItem.vue'
import TaskTableSearchSort from './TaskTableSearchSort.vue'

const tasks = ref<MyTask[]>([
  {
    id: '1',
    title: 'Some task',
    criticalLvl: TaskCriticalLvlEnum.high,
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
  {
    id: '1',
    title: 'Some task',
    criticalLvl: TaskCriticalLvlEnum.high,
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
  {
    id: '1',
    title: 'Some task',
    criticalLvl: TaskCriticalLvlEnum.high,
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
