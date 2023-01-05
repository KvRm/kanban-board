<template>
  <div class="board-link-list flex flex-wrap justify-between gap-4 sm:mr-10 mb-16">
    <BoardLink
      v-for="board in boardList"
      :key="board.id"
      :name="board.name"
      :id="board.id"
    />
  </div>
</template>

<script setup lang="ts">
import BoardLink from './BoardLink.vue'

const boardList = [
  {
    name: 'Some Name',
    id: '0',
  },
  {
    name: 'Some Name',
    id: '1',
  },
  {
    name: 'Some Name',
    id: '2',
  },
  {
    name: 'Some Name',
    id: '3',
  },
]
</script>
