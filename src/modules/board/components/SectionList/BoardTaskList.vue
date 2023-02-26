<template>
  <div class="tasks-list" @drop="onDrop" @dragover.prevent @dragenter.prevent>
    <BoardTaskItem v-for="task in tasks" :task="task" :board-id="boardId" />
  </div>
</template>

<script setup lang="ts">
  import { StatusSectionTask } from '../../../../models/StatusSection'
  import BoardTaskItem from './BoardTaskItem.vue'

  const props = defineProps<{
    tasks: StatusSectionTask[]
    boardId: string
    sectionId: string
  }>()

  const emit = defineEmits<{
    (e: 'moveElement', taskId: string, sectionId: string): void
  }>()

  function onDrop(e: DragEvent) {
    const taskId = e.dataTransfer?.getData('taskId') as string
    emit('moveElement', taskId, props.sectionId)
  }
</script>

<style scoped lang="scss">
  .tasks-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 1rem;
  }
</style>
