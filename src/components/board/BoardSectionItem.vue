<template>
  <section class="board-section flex flex-col gap-3 h-full mb-3">
    <!-- Header -->
    <div class="section-header w-72 py-3 px-0.5 relative font-bold">
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

    <!-- List -->
    <BoardTaskItem v-for="task in section.tasks" :task="task" />

    <!-- AddBtn -->
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
  import DropdownInput from '../common/DropdownInput.vue'

  const props = defineProps<{
    section: BoardStatusSection
  }>()

  const tasksCount = computed<number>(() => props.section.tasks.length)
  const capitalizedTitle = computed<string>(() => props.section.title.toUpperCase())
</script>
