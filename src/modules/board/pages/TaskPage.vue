<template>
  <div class="task-container">
    <TheTask />
  </div>
</template>

<script setup lang="ts">
  import TheTask from '../components/TheTask.vue'
</script>

<style scoped lang="scss">
  .task-container {
    min-height: calc(100vh - 80px);
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
