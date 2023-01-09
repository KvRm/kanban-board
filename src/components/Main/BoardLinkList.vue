<template>
  <div class="board-link-list flex flex-wrap gap-4 max-md:mr-10 max-sm:mr-0 mb-16">
    <BoardLink v-for="board in boardList" :key="board.id" :link="board" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Link } from '../../types/common'
import BoardLink from './BoardLink.vue'

const boardList = ref<Link[]>([
  {
    title: 'Some title',
    id: '0',
  },
  {
    title: 'Some title',
    id: '1',
  },
  {
    title: 'Some title',
    id: '2',
  },
  {
    title: 'Some title',
    id: '3',
  },
])
</script>
