<template>
  <div class="board-sections-list">
    <BoardSectionItem
      v-for="section in statusSections"
      :key="section.id"
      :section="section"
      :board-id="boardId"
      @move-element="moveElement"
    />

    <ElTooltip
      class="box-item"
      effect="light"
      :content="t('createNewSection')"
      placement="top-end"
    >
      <ElButton
        class="add-section"
        :disabled="!choosenSprint"
        @click="isDialogVisible = true"
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </ElButton>
    </ElTooltip>

    <ElDialog
      v-model="isDialogVisible"
      title="Создать статус секцию"
      :width="`${modalWidth}%`"
      align-center
    >
      <div class="create-form">
        <div class="title">
          <label>Название</label>
          <ElInput v-model="newSectionTitle" placeholder="Введите текст" />
          <p class="error-message">{{ errors.newSectionTitle }}</p>
        </div>
        <div class="color">
          <label>Цвет</label>
          <ElColorPicker v-model="newSectionColor" />
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="isDialogVisible = false">Отменить</ElButton>
          <ElButton
            type="primary"
            @click="handleCreateStatusSection"
            :disabled="isBtnDisabled"
            :loading="loading"
          >
            Создать
          </ElButton>
        </span>
      </template>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'
  import { useModalWidth } from '../../../../composables/useModalWidth'
  import { StatusSection } from '../../../../models/StatusSection'
  import { useBoardStore } from '../../stores/boardStore'
  import BoardSectionItem from './BoardSectionItem.vue'
  import { useField, useForm } from 'vee-validate'
  import { toFormValidator } from '@vee-validate/zod'
  import * as zod from 'zod'

  const { t } = useI18n()
  const boardStore = useBoardStore()
  const route = useRoute()
  const modalWidth = useModalWidth()
  const boardId = route.params.boardId as string

  const statusSections = computed<StatusSection[]>(() => boardStore.statusSections)
  const choosenSprint = computed(() => boardStore.choosenSprint)
  const loading = computed<boolean>(() => boardStore.loading)

  const newSectionColor = ref('#409EFF')

  const isDialogVisible = ref<boolean>(false)
  const isBtnDisabled = computed<boolean>(() => !!errors.value.newSectionTitle)

  const validationSchema = toFormValidator(
    zod.object({
      newSectionTitle: zod.string().trim().min(1, 'Обязательное поле'),
    })
  )
  const { handleSubmit, errors } = useForm<{ newSectionTitle: string }>({
    validationSchema,
  })
  const { value: newSectionTitle } = useField<string>('newSectionTitle')

  const handleCreateStatusSection = handleSubmit(async (values) => {
    if (choosenSprint.value)
      await boardStore.createStatusSection({
        boardId,
        title: values.newSectionTitle,
        color: newSectionColor.value,
        sprintId: choosenSprint.value.id,
        tasks: [],
        order: statusSections.value.length,
      })

    isDialogVisible.value = false
  })

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
    .create-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .color {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
</style>
