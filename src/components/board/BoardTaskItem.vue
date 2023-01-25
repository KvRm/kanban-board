<template>
  <div
    class="task flex justify-between bg-primary-soft shadow-lg rounded-btn"
    :draggable="draggable"
    @dragstart="onDragStart($event)"
  >
    <div class="task-content flex p-2">
      <span class="h-full w-max text-2xl mr-2 self-center">
        <FontAwesomeIcon icon="fa-solid fa-circle-up" />
      </span>
      <div class="content flex items-center">{{ task.title }}</div>
    </div>
    <div
      class="task-drag flex justify-center w-0 bg-secondary rounded-r-btn cursor-grab transition-all"
      @mouseenter="draggable = true"
      @mouseleave="draggable = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { StatusSectionTaskLink } from '../../types/common'

  const props = defineProps<{
    task: StatusSectionTaskLink
  }>()

  const draggable = ref<boolean>(false)

  function onDragStart(e: DragEvent) {
    e.dataTransfer!.dropEffect = 'move'
    e.dataTransfer!.effectAllowed = 'move'
    e.dataTransfer!.setData('taskId', props.task.id)
  }
</script>

<style scoped>
  .task:hover > .task-drag {
    width: 1rem;
  }
</style>
