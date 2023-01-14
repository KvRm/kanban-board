<template>
  <div class="min-h-view flex gap-6 overflow-x-scroll overflow-y-hidden">
    <BoardSectionItem v-for="section in sections" :key="section.id" :section="section" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { BoardStatusSection } from '../../types/board'
  import { TaskCriticalLvlEnum } from '../../types/task'
  import BoardSectionItem from './BoardSectionItem.vue'

  const props = defineProps<{
    boardId: string
  }>()

  const sections = ref<BoardStatusSection[]>([
    {
      id: '1',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '1',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '1',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '1',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '1',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2121',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Medium,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
  ])
</script>
