<template>
  <div
    class="toast hidden-xs-only flex justify-between max-w-2xl px-3 py-2 mx-auto mt-2 rounded-xl text-white shadow-2xl"
    :class="`bg-${color}`"
  >
    <p class="content w-full text-center">{{ toast.text }}</p>
    <button class="ml-1" @click="handleCloseBtnClick">
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useToasts } from '../composables/toasts'
  import { Toast } from '../typings/common/toast.type'
  import 'element-plus/theme-chalk/display.css'

  const props = defineProps<{
    toast: Toast
  }>()

  const { removeToast } = useToasts()
  const color = computed<string>(() => (props.toast.type === 'error' ? 'red' : 'green'))

  function handleCloseBtnClick() {
    removeToast(props.toast.id)
  }
</script>

<style scoped>
  .toast {
    box-shadow: 0 0 6px gray;
  }
</style>
