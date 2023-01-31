import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Toast } from '../types/common/toast.type'

export const useToastsStore = defineStore('toasts', () => {
  const toastsValue = ref<Toast[]>([])
  const toasts = computed<Toast[]>(() => toastsValue.value)

  function log(text: string) {
    const id = toastsValue.value.length + 1
    toastsValue.value.push({ id, text, type: 'success' })
    setTimeout(() => remove(id), 5000)
  }

  function warn(text: string) {
    const id = toastsValue.value.length + 1
    toastsValue.value.push({ id, text, type: 'error' })
    setTimeout(() => remove(id), 5000)
  }

  function remove(id: number) {
    toastsValue.value = toastsValue.value.filter((t) => {
      if (t.id !== id) {
        return t
      }
    })
  }

  return { toasts, log, warn, remove }
})
