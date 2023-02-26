<template>
  <section class="board-section">
    <!-- Header -->
    <div class="section-header">
      <!-- Header Title -->
      <span
        class="section-title"
        :style="{ '--bgColor': section.color || 'var(--el-color-primary)' }"
      >
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
        <ElDropdown class="section-settings" trigger="click">
          <span class="ElDropdown-link">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
          </span>
          <template #dropdown>
            <ElDropdown-menu>
              <ElDropdown-item @click="taskTitleRewriting = true">
                <ElIcon class="ElIcon--left">
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                </ElIcon>
                <span>Изменить название</span>
              </ElDropdown-item>
              <ElDropdown-item @click="handleRemoveSection">
                <ElIcon class="ElIcon--left">
                  <FontAwesomeIcon icon="fa-solid fa-trash" />
                </ElIcon>
                <span>Удалить</span>
              </ElDropdown-item>
            </ElDropdown-menu>
          </template>
        </ElDropdown>
      </div>
    </div>

    <BoardTaskList
      :tasks="section.tasks"
      :board-id="boardId"
      :section-id="section.id"
      @move-element="moveElement"
    />

    <!-- AddBtn -->
    <ElButton size="large" class="section-add-btn" @click="isDialogVisible = true">
      Добавить
    </ElButton>

    <ElDialog
      v-model="isDialogVisible"
      title="Добавить задачу"
      :width="`${modalWidth}%`"
      align-center
    >
      <div class="create-form">
        <div class="title">
          <label>Название</label>
          <ElInput v-model="newSectionTitle" placeholder="Введите текст" />
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="isDialogVisible = false">Отменить</ElButton>
          <ElButton type="primary" @click="handleAddTaskBtn">Создать</ElButton>
        </span>
      </template>
    </ElDialog>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { StatusSection } from '../../../../models/StatusSection'
  import RewritableParagraph from '../../../../components/BaseRewritableParagraph.vue'
  import BoardTaskList from './BoardTaskList.vue'
  import { useModalWidth } from '../../../../composables/useModalWidth'
  import { ElDropdown, ElMessageBox } from 'element-plus'
  import { useBoardStore } from '../../stores/boardStore'

  const props = defineProps<{
    section: StatusSection
    boardId: string
  }>()

  const emit = defineEmits<{
    (e: 'moveElement', taskId: string, sectionId: string): void
  }>()

  const modalWidth = useModalWidth()
  const boardStore = useBoardStore()

  const title = ref<string>(props.section.title)
  const taskTitleRewriting = ref<boolean>(false)
  const isDialogVisible = ref<boolean>(false)
  const newSectionTitle = ref<string>('')

  const tasksCount = computed<number>(() => props.section.tasks.length)
  const capitalizedTitle = computed<string>(() => title.value.toUpperCase())

  async function rewriteTitle(value: string) {
    const isRewrited = await boardStore.updateTitle(props.section.id, value)
    if (isRewrited) {
      title.value = value
      taskTitleRewriting.value = false
    }
  }

  function moveElement(taskId: string, sectionId: string) {
    emit('moveElement', taskId, sectionId)
  }

  function handleAddTaskBtn() {
    isDialogVisible.value = false
  }

  const handleRemoveSection = () => {
    ElMessageBox.confirm(
      `Статус секция "${title.value}" будет безвозвратно удалена. Продолжить?`,
      'Предупреждение',
      {
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        type: 'error',
      }
    ).then(() => {
      boardStore.removeStatusSection(props.section.id)
    })
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

          background-color: var(--bgColor);

          border-radius: 0.5rem;
        }
      }
      .section-options {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        .section-counter {
          border: 1px solid var(--el-color-info-light-5);
          padding: 0.15rem 0.55rem;
          border-radius: 0.5rem;
        }
        .section-settings {
          position: relative;
          float: right;
          color: var(--el-text-color-primary);
          cursor: pointer;
        }
      }
    }
    .section-add-btn {
      margin-top: 0.5rem;
    }
  }
</style>

<style lang="scss"></style>
