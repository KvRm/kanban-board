import { ref } from 'vue'
import { Toast, ToastType } from '../types'

const toasts = ref<Toast[]>([])

export const useToasts = () => {
  function dispatch(text: string, type: ToastType) {
    const id = toasts.value.length + 1
    toasts.value.push({ id, text, type })
    setTimeout(() => removeToast(id), 5000)
  }

  function removeToast(id: number) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, dispatch, removeToast }
}
