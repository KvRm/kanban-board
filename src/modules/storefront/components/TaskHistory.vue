<template>
  <div class="tasks-history">
    <span class="tasks-history-title">Последние задачи:</span>
    <span
      v-for="task in tasks"
      :key="task.board.id + task.prefix + task.id"
      class="tasks-history-item"
    >
      <BaseLink :link="task" />
    </span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import BaseLink from '../../../components/link/BaseLink.vue'
  import { TaskLink } from '../../../components/link'

  const tasks = ref<TaskLink[]>([
    {
      title: 'TaskLink 1',
      id: '0',
      prefix: 'JAP',
      board: {
        id: '212',
      },
      type: 'task',
    },
    {
      title: 'TaskLink 1',
      id: '0',
      prefix: 'JAP',
      board: {
        id: '212',
      },
      type: 'task',
    },
    {
      title: 'TaskLink 1',
      id: '0',
      prefix: 'JAP',
      board: {
        id: '212',
      },
      type: 'task',
    },
    {
      title: 'TaskLink 1',
      id: '0',
      prefix: 'JAP',
      board: {
        id: '212',
      },
      type: 'task',
    },
    {
      title: 'TaskLink 1',
      id: '0',
      prefix: 'JAP',
      board: {
        id: '212',
      },
      type: 'task',
    },
  ])
</script>

<style scoped lang="scss">
  .tasks-history {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 12rem;
    background-color: var(--el-color-info-light-9);
    padding: 0.5rem 1rem;
    box-shadow: var(--el-box-shadow-light);
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    overflow: hidden;
  }
  .tasks-history-title {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .tasks-history-item {
    margin-bottom: 0.75rem;
    a {
      &:hover {
        text-decoration: underline;
        color: var(--el-color-primary);
      }
    }
  }
</style>
