<template>
  <section class="task-table">
    <TaskTable />
  </section>
</template>

<script setup lang="ts">
  import TaskTable from '../modules/TaskTable/components/TaskTable.vue'
</script>

<style scoped lang="scss">
  .task-table {
    overflow-x: auto;
    min-height: calc(100vh - 96px);
  }
</style>
