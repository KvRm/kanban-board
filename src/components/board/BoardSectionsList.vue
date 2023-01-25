<template>
  <div class="min-h-view flex gap-6 overflow-x-scroll overflow-y-hidden">
    <BoardSectionItem
      v-for="section in sections"
      :key="section.id"
      :section="section"
      @move-element="moveElement"
    />
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

  function moveElement(taskId: string, sectionId: string) {
    // sections.value.forEach((s) => {
    //   s.tasks.forEach((t) => {
    //     if (t.id === taskId) {
    //       s.id = sectionId
    //     }
    //   })
    // })

    const allTasks = sections.value.flatMap((s) => s.tasks)
    const movingTask = allTasks.find((t) => t.id === taskId)

    sections.value.forEach((s) => {
      s.tasks = s.tasks.filter((t) => t.id !== taskId)
      if (movingTask && s.id === sectionId) {
        s.tasks.push(movingTask)
      }
    })
  }

  const sections = ref<BoardStatusSection[]>([
    {
      id: '0',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '0-0',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },

        {
          title: 'Task',
          id: '0-1',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '0-2',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '0-3',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
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
          id: '1-0',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '1-1',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '2',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '2-0',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '2-1',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '3',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '3-0',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.Low,
          board: {
            id: props.boardId,
          },
        },
        {
          title: 'Task',
          id: '3-1',
          prefix: 'JAP',
          criticalLvl: TaskCriticalLvlEnum.High,
          board: {
            id: props.boardId,
          },
        },
      ],
    },
    {
      id: '4',
      title: 'Важно',
      tasks: [
        {
          title: 'Task',
          id: '4-0',
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
