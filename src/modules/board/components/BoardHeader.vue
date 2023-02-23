<template>
  <div class="board-header">
    <div class="header-row">
      <h3 class="board-title">
        {{ boardTitle }}
      </h3>
      <BoardSettings />
    </div>
    <div class="header-row">
      <div class="sort-search">
        <SearchInput
          :search-resource="[{}]"
          placeholder="Введите id или название задачи"
        />
      </div>
      <div class="sprint">
        <p>Спринт</p>
        <el-select
          v-model="choosenSprint.title"
          placeholder="Выбрать спринт"
          size="large"
        >
          <el-option
            v-for="item in sprints"
            :key="item.title"
            :label="item.title"
            :value="item.title"
          />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { Sprint } from '../../../models/Sprint'
  import { useBoardStore } from '../stores/boardStore'
  import BoardSettings from './BoardSettings.vue'

  const props = defineProps<{
    boardTitle: string
  }>()

  const boardStore = useBoardStore()
  const route = useRoute()

  const sprints = computed<Sprint[]>(() => boardStore.sprints)
  const choosenSprint = computed<Sprint?>(() => boardStore.choosenSprint)

  const boardId = route.params.boardId as string
  const defaultTitle = 'Выбрать...'

  onMounted(async () => {
    if (boardId) {
      await boardStore.loadSprints(boardId)
      if (sprints.value && sprints.value.length) {
        boardStore.chooseSprint(sprints.value[0])
      }
    }
  })

  watch(choosenSprint, () => {
    if (choosenSprint.value?.title !== defaultTitle) {
      boardStore.loadStatusSections(boardId, choosenSprint.value.id)
    } else {
      boardStore.clearStatusSections()
    }
  })
</script>

<style scoped lang="scss">
  .board-header {
    .header-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      @media not all and (min-width: 840px) {
        flex-direction: column;
        align-items: center;
      }
      .board-title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        line-height: 2rem;

        @media not all and (min-width: 840px) {
          margin-bottom: 1.25rem;
        }
      }
      .sort-search {
        display: flex;
        gap: 1rem;
      }
    }
  }
</style>
