<template>
  <section class="h-screen">
    <BoardSectionItem v-for="section in sections" :key="section.id" :section="section" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoardStatusSection } from '../../types/board'
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
        board: {
          id: props.boardId,
        },
      },
    ],
  },
])
</script>
