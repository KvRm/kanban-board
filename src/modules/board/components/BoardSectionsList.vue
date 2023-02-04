<template>
  <div class="board-sections-list">
    <BoardSectionItem
      v-for="section in sections"
      :key="section.id"
      :section="section"
      :board-id="boardId"
      @move-element="moveElement"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { BoardStatusSection } from '../../../models/Board'
  import { TaskCriticalLvlEnum } from '../../../models/Task'
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
          id: '0-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '1',
      title: 'Не очень важно',
      tasks: [
        {
          id: '1-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
    {
      id: '2',
      title: 'Не надо такое',
      tasks: [
        {
          id: '2-0',
          title: 'Task',
          criticalLvl: TaskCriticalLvlEnum.Low,
          prefix: 'JAP',
        },
      ],
    },
  ])
</script>

<style scoped lang="scss">
  // TODO: Дописать стили для передвижения только секций
  .board-sections-list {
    display: flex;
    min-height: calc(100vh - 80px);
    justify-content: flex-start;
    gap: 1.5rem;
    flex-flow: row nowrap;
    overflow-x: auto;
  }
</style>
