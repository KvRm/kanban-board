<template>
  <section class="board-section">
    <!-- Header -->
    <div class="section-header">
      <!-- Header Title -->
      <span class="section-title">
        <RewritableParagraph
          v-model="capitalizedTitle"
          :editing="taskTitleRewriting"
          placeholder="Новое название"
          @update:model-value="rewriteTitle"
        />
      </span>

      <!-- Header settings dropdown -->
      <div class="section-options">
        <span class="section-counter">
          {{ tasksCount }}
        </span>
        <el-dropdown class="section-settings" trigger="click">
          <span class="el-dropdown-link">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="taskTitleRewriting = true">
                <el-icon class="el-icon--left">
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                </el-icon>
                <span>Изменить название</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-icon class="el-icon--left">
                  <FontAwesomeIcon icon="fa-solid fa-trash" />
                </el-icon>
                <span>Удалить</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <BoardTaskList
      :tasks="section.tasks"
      :board-id="boardId"
      :section-id="section.id"
      @move-element="moveElement"
    />

    <!-- AddBtn -->
    <el-button size="large" class="section-add-btn">Добавить</el-button>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useToasts } from '../../../composables/useToasts'
  import { BoardStatusSection } from '../../../models/Board'
  import RewritableParagraph from '../../../components/RewritableParagraph.vue'
  import BoardTaskList from './BoardTaskList.vue'

  const props = defineProps<{
    section: BoardStatusSection
    boardId: string
  }>()

  const emit = defineEmits<{
    (e: 'moveElement', taskId: string, sectionId: string): void
  }>()

  const { dispatch } = useToasts()

  const tasksCount = computed<number>(() => props.section.tasks.length)
  const title = ref<string>(props.section.title)
  const capitalizedTitle = computed<string>(() => title.value.toUpperCase())
  const taskTitleRewriting = ref<boolean>(false)

  function rewriteTitle(value: string) {
    title.value = value
    taskTitleRewriting.value = false
    dispatch('Название изменено', 'success')
  }

  function moveElement(taskId: string, sectionId: string) {
    emit('moveElement', taskId, sectionId)
  }
</script>

<style scoped lang="scss">
  .board-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    height: 100%;
    margin-bottom: 0.75rem;
    .section-header {
      display: flex;
      position: relative;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
      width: 18rem;
      padding: 0.75rem 0.125rem;
      font-weight: 700;
      .section-title {
        display: inline-block;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.25rem;
          background-color: var(--el-color-primary);
          border-radius: 0.5rem;
        }
      }
      .section-options {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        .section-counter {
          border-width: 1px;
          border-color: var(--el-color-info-light-5);
          padding: 0 0.75rem;
          border-radius: 0.5rem;
        }
        .section-settings {
          position: relative;
          float: right;
          color: var(--el-text-color-primary);
        }
      }
    }
    .section-add-btn {
      margin-top: 0.5rem;
    }
  }
</style>

<style lang="scss"></style>
