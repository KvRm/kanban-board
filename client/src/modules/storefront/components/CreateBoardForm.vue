<template>
  <BaseForm class="create-board-form" @submit="handleForm">
    <template #header>
      <h1 class="title">Create board</h1>
    </template>
    <template #main>
      <div class="main">
        <el-input v-model="boardTitle" placeholder="Type board title" />
        <!-- TODO: Участники -->
      </div>
    </template>
    <template #footer>
      <ElButton class="submit-btn" native-type="submit" :loading="boardStore.loading">
        Создать
      </ElButton>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import BaseForm from '../../../components/BaseForm.vue'
  import { useBoardStore } from '../../../stores/boardStore'

  const boardStore = useBoardStore()

  const boardTitle = ref<string>('')

  function handleForm() {
    boardStore.createBoard(boardTitle.value)
  }
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
