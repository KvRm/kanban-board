<template>
  <Teleport to="body">
    <div class="toasts-container fixed w-full bottom-0 left-0 px-2 mb-2 z-50">
      <TransitionGroup name="toasts">
        <ToastNotification v-for="toast in toasts" :key="toast.id" :toast="toast" />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useToastsStore } from '../../stores/toastsStore'
  import { Toast } from '../../types/common/toast.type'
  import ToastNotification from './ToastNotification.vue'

  const toastsStore = useToastsStore()
  const toasts = computed<Toast[]>(() => toastsStore.toasts)
</script>

<style scoped>
  .toasts-enter-active,
  .toasts-leave-active {
    transition: all 0.5s ease;
  }
  .toasts-enter-from,
  .toasts-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
</style>
