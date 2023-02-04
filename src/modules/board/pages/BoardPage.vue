<template>
  <div class="board">
    <BoardHeader board-title="Some Title" />
    <BoardSectionsList board-id="1" />
  </div>
</template>

<script setup lang="ts">
  import BoardHeader from '../components/BoardHeader.vue'
  import BoardSectionsList from '../components/BoardSectionsList.vue'
</script>
