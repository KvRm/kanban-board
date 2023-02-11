<template>
  <Teleport to="body">
    <div v-show="isSpinnerActive" class="spinner-container">
      <div class="spinner"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useSpinner } from '../composables/useSpinner'

  const spinner = ref<HTMLElement | null>(null)
  const isSpinnerActive = useSpinner()

  onMounted(() => {
    focusSpinner()
    if (spinner.value) {
      spinner.value.addEventListener('focusout', focusSpinner)
    }
  })

  function focusSpinner() {
    if (spinner.value) {
      spinner.value.focus()
    }
  }
</script>

<style scoped lang="scss">
  .spinner-container {
    display: flex;
    position: fixed;
    justify-content: center;
    background: var(--el-color-info-light-9);
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    @keyframes Rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid var(--el-color-info-light-7);
      border-radius: 50%;
      border-top-color: var(--el-color-info-light-3);
      animation: Rotate 1.8s linear 0s infinite forwards;
    }
  }
</style>
