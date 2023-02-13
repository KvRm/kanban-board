<template>
  <div class="board-sections-list">
    <BoardSectionItem
      v-for="section in statusSections"
      :key="section.id"
      :section="section"
      :board-id="boardId"
      @move-element="moveElement"
    />
    <el-tooltip
      class="box-item"
      effect="light"
      :content="t('createNewSection')"
      placement="top-end"
    >
      <el-button class="add-section">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { StatusSection } from '../../../models/StatusSection'
  import { useStatusSectionsStore } from '../../../stores/statusSectionsStore'
  import BoardSectionItem from './BoardSectionItem.vue'

  const props = defineProps<{
    boardId: string
  }>()

  const { t } = useI18n()
  const statusSectionStore = useStatusSectionsStore()

  const statusSections = computed<StatusSection[]>(
    () => statusSectionStore.statusSections
  )

  function moveElement() {}

  // function moveElement(taskId: string, sectionId: string) {
  //   // sections.value.forEach((s) => {
  //   //   s.tasks.forEach((t) => {
  //   //     if (t.id === taskId) {
  //   //       s.id = sectionId
  //   //     }
  //   //   })
  //   // })

  //   const allTasks = sections.value.flatMap((s) => s.tasks)
  //   const movingTask = allTasks.find((t) => t.id === taskId)

  //   sections.value.forEach((s) => {
  //     s.tasks = s.tasks.filter((t) => t.id !== taskId)
  //     if (movingTask && s.id === sectionId) {
  //       s.tasks.push(movingTask)
  //     }
  //   })
  // }
</script>

<style scoped lang="scss">
  .board-sections-list {
    display: flex;
    min-height: calc(100vh - 80px);
    justify-content: flex-start;
    gap: 1.5rem;
    flex-flow: row nowrap;
    overflow-x: auto;
    .add-section {
      margin-top: 0.7rem;
      padding: 1.2rem 0.7rem;
      font-size: 1.5rem;
      min-width: 3rem;
    }
  }
</style>
