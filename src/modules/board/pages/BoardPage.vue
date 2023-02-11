<template>
  <div v-if="board" class="board">
    <BoardHeader :board-title="board.title" />
    <BoardSectionsList board-id="1" />
  </div>
</template>

<script setup lang="ts">
  import BoardHeader from '../components/BoardHeader.vue'
  import BoardSectionsList from '../components/BoardSectionsList.vue'
  import { useI18n } from 'vue-i18n'
  import { computed, onMounted } from 'vue'
  import { useBoardStore } from '../stores/boardStore'
  import { useRoute } from 'vue-router'
  import { Board } from '../../../models/Board'

  const { t } = useI18n()
  const boardStore = useBoardStore()
  const route = useRoute()

  const board = computed<Board | null>(() => boardStore.board)

  onMounted(async () => {
    await boardStore.getBoard(route.params.boardId as string)
  })
</script>

<style scoped lang="scss">
  .breadcrumbs {
    margin-bottom: 0.5rem;
  }
</style>
