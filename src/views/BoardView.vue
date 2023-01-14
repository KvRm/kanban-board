<template>
  <BoardHeader board-title="Титульник" />
  <BoardSectionsList :board-id="'1'" />
</template>

<script setup lang="ts">
  import BoardHeader from '../components/board/BoardHeader.vue'
  import BoardSectionsList from '../components/board/BoardSectionsList.vue'
</script>
