<template>
  <div class="board">
    <BoardHeader :board-title="boardTitle" />
    <BoardSectionsList board-id="1" />
  </div>
</template>

<script setup lang="ts">
  import BoardHeader from '../components/BoardHeader.vue'
  import BoardSectionsList from '../components/BoardSectionsList.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const boardTitle = 'Some Title'
</script>

<style scoped lang="scss">
  .breadcrumbs {
    margin-bottom: 0.5rem;
  }
</style>
