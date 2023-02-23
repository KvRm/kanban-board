<template>
  <section class="create-board">
    <CreateBoardForm />
  </section>
</template>

<script setup lang="ts">
  import CreateBoardForm from '../modules/board/components/CreateBoardForm.vue'
</script>

<style scoped lang="scss">
  .create-board {
    min-height: calc(100vh - 96px);
  }
</style>
