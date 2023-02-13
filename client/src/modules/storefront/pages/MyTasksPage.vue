<template>
  <section class="task-table">
    <TaskTable />
  </section>
</template>

<script setup lang="ts">
  import TaskTable from '../components/TaskTable/TaskTable.vue'
</script>

<style scoped lang="scss">
  .task-table {
    overflow-x: auto;
    min-height: calc(100vh - 80px);
  }
</style>
