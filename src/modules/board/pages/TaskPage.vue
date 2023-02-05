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
    background: slateblue;
    min-height: calc(100vh - 80px);
    max-width: 1000px;
    padding: 0.5rem;
    margin: 0 auto;
  }
</style>
