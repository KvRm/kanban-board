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
  import { useToasts } from '../composables/useToasts'
  import ToastNotification from './ToastNotification.vue'

  const { toasts } = useToasts()
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
