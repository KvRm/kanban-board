<template>
  <div v-if="board" class="board">
    <BoardHeader :board-title="board.title" />
    <BoardSectionsList board-id="1" />
  </div>
</template>

<script setup lang="ts">
  import BoardHeader from '../modules/board/components/BoardHeader.vue'
  import BoardSectionsList from '../modules/board/components/BoardSectionsList.vue'
  import { useI18n } from 'vue-i18n'
  import { computed, onMounted, onUnmounted, watch } from 'vue'
  import { useBoardStore } from '../modules/board/stores/boardStore'
  import { useRoute } from 'vue-router'
  import { Board } from '../models/Board'

  const { t } = useI18n()
  const boardStore = useBoardStore()
  const route = useRoute()

  // TODO: getter boolean
  const board = computed<Board | null>(() => boardStore.board)

  onMounted(async () => {
    await boardStore.loadBoard(route.params.boardId as string)
  })

  onUnmounted(() => {
    boardStore.clearState()
  })

  watch(route, async () => {
    await boardStore.loadBoard(route.params.boardId as string)
  })
</script>

<style scoped lang="scss">
  .breadcrumbs {
    margin-bottom: 0.5rem;
  }
</style>
