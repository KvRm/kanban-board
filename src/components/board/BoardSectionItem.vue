<template>
  <section class="board-section font-bold py-3 w-72 after:w-full after:contents after:h-4 after:bg-secondary border-b-4 border-color-primary">
    <span class="title mr-2">{{ capitalizedTitle }}</span>
    <span class="border border-color-soft px-3 rounded-btn">{{ tasksCount }}</span>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BoardStatusSection } from '../../types/board'

const props = defineProps<{
  section: BoardStatusSection
}>()

const tasksCount = computed<number>(() => props.section.tasks.length)
const capitalizedTitle = computed<string>(() => props.section.title.toUpperCase())
</script>
