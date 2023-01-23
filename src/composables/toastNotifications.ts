import { Ref, ref } from 'vue'
import { Toast } from '../types/common/toast.type'

const toasts = ref<Toast[]>([])

export const useToasts = () => {
  const log = (text: string) => {
    toasts.value.push({ id: toasts.value.length++, text, type: 'success' })
  }
  const warn = (text: string) => {
    toasts.value.push({ id: toasts.value.length++, text, type: 'success' })
  }

  const value = toasts

  return { log, warn, value }
}
