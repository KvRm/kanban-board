<template>
  <Teleport to="body">
    <div class="toasts-container">
      <TransitionGroup name="toasts">
        <el-alert
          v-for="toast in toasts"
          :title="toast.text"
          :type="toast.type"
          center
          show-icon
          class="toast"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import { useToasts } from '../../composables/useToasts'

  const { toasts } = useToasts()
</script>

<style scoped lang="scss">
  .toasts-container {
    width: 100%;
    justify-content: center;
    position: fixed;
    bottom: 0;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    z-index: 50;
    .toast {
      max-width: 65rem;
      margin: 0.5rem auto 0 auto;
    }
  }

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
