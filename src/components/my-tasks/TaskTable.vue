<template>
  <TaskTableSearchSort @search="handleSearch" @select-sort-params="selectSortParams" />
  <table class="table-fixed w-full max-lg:border-none">
    <thead class="max-lg:hidden lg:border-b border-color-soft">
      <tr class="max-lg:block">
        <th v-for="category in TaskTableCategoriesEnum" :key="category" class="p-1 pb-3">
          {{ category }}
        </th>
      </tr>
    </thead>
    <tbody>
      <TaskTableItem v-for="task in tasks" :key="task.id" :task="task" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { MyTask, TaskCriticalLvlEnum, TaskTableCategoriesEnum } from '../../types/task'
  import TaskTableItem from './TaskTableItem.vue'
  import TaskTableSearchSort from './TaskTableSearchSort.vue'

  function handleSearch(value: string) {
    console.log(value)
  }

  function selectSortParams() {}

  const tasks = ref<MyTask[]>([
    {
      id: '121212213',
      prefix: 'JAP',
      title: 'Some task',
      criticalLvl: TaskCriticalLvlEnum.High,
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
      prefix: 'JAP',
      title: 'Some task',
      criticalLvl: TaskCriticalLvlEnum.High,
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
      prefix: 'JAP',
      title: 'Some task',
      criticalLvl: TaskCriticalLvlEnum.High,
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
