import { ref } from 'vue'
import { Toast, ToastType } from '../typings/common/toast.type'

const toasts = ref<Toast[]>([])

export const useToasts = () => {
  function toast(text: string, type: ToastType) {
    const id = toasts.value.length + 1
    toasts.value.push({ id, text, type })
    setTimeout(() => removeToast(id), 5000)
  }

  function removeToast(id: number) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, toast, removeToast }
}
