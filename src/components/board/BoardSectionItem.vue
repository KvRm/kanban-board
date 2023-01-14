<template>
  <section class="board-section w-72 flex flex-col gap-3 h-full">
    <div class="section-header py-3 px-0.5 relative font-bold">
      <span
        class="title mr-2 after:bottom-0 after:left-0 after:w-full after:absolute after:h-1 after:bg-secondary after:rounded-btn"
      >
        {{ capitalizedTitle }}
      </span>
      <span class="border border-color-soft px-3 rounded-btn">{{ tasksCount }}</span>
      <button class="float-right">
        <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
      </button>
    </div>
    <BoardTaskItem v-for="task in section.tasks" :task="task" />
    <button
      class="border bg-primary-soft hover:bg-secondary hover:border-color-primary transition-all border-color-soft px-3 py-1 rounded-btn flex self-center w-max"
    >
      Добавить
    </button>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { BoardStatusSection } from '../../types/board'
  import BoardTaskItem from './BoardTaskItem.vue'

  const props = defineProps<{
    section: BoardStatusSection
  }>()

  const tasksCount = computed<number>(() => props.section.tasks.length)
  const capitalizedTitle = computed<string>(() => props.section.title.toUpperCase())
</script>
