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
        <el-select v-model="sprintTitle" placeholder="Выбрать спринт" size="large">
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
  import { computed, onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import SearchInput from '../../../components/SearchInput.vue'
  import { Sprint } from '../../../models/Sprint'
  import { useBoardStore } from '../stores/boardStore'
  import BoardSettings from './BoardSettings.vue'

  const props = defineProps<{
    boardTitle: string
  }>()

  const boardStore = useBoardStore()
  const route = useRoute()

  const sprints = computed<Sprint[] | null>(() => boardStore.sprints)
  const sprint = ref<Sprint>()
  const sprintTitle = ref<string>('Выбрать...')

  onMounted(async () => {
    const boardId = route.params.boardId as string
    if (boardId) {
      await boardStore.getSprints(boardId)
      if (sprints.value && sprints.value.length) {
        sprint.value = sprints.value[0]
        sprintTitle.value = sprint.value.title
      }
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
