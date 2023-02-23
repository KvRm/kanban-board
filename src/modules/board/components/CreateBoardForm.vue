<template>
  <BaseForm class="create-board-form" @submit="handleForm">
    <template #header>
      <h1 class="title">Create board</h1>
    </template>
    <template #main>
      <div class="main">
        <label>Board Title</label>
        <el-input v-model="boardTitle" placeholder="Type board title" />
        <p class="error-meassage">{{ errors.boardTitle }}</p>
        <!-- TODO: Участники -->
      </div>
    </template>
    <template #footer>
      <ElButton
        class="submit-btn"
        native-type="submit"
        :loading="boardStore.loading"
        :disabled="isBtnDisabled"
      >
        Создать
      </ElButton>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
  import BaseForm from '../../../components/BaseForm.vue'
  import { useBoardStore } from '../stores/boardStore'
  import { useField, useForm } from 'vee-validate'
  import { toFormValidator } from '@vee-validate/zod'
  import * as zod from 'zod'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useLocale } from '../../LocaleSwitcher/composables/useLocale'
  import { LinkRouteEnum } from '../../../components/Link/types'

  const router = useRouter()
  const boardStore = useBoardStore()
  const { localeRoute } = useLocale()

  const validationSchema = toFormValidator(
    zod.object({
      boardTitle: zod
        .string()
        .trim()
        .min(6, 'Минимальная длина названия - 6 символов')
        .max(20, 'Максимальная длина названия - 20 символов'),
    })
  )
  const { handleSubmit, errors } = useForm<{ boardTitle: string }>({
    validationSchema,
  })
  const { value: boardTitle } = useField<string>('boardTitle')

  const isBtnDisabled = computed<boolean>(
    () => !!(errors.value.boardTitle || !boardTitle.value)
  )

  const handleForm = handleSubmit(async (values) => {
    const boardId = await boardStore.createBoard(values.boardTitle)
    if (boardId) router.push(`${localeRoute.value}/${LinkRouteEnum.Board + boardId}`)
  })
</script>

<style scoped lang="scss">
  .create-board-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    .title {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .main {
      width: 100%;
      margin-bottom: 2rem;
    }
    .submit-btn {
      max-width: 300px;
    }
  }
</style>
