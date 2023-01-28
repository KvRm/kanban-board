import { onUnmounted, Ref } from 'vue'
import { VoidFunction } from '../types/common'

export const useClickOutside = (
  cb: VoidFunction,
  element: Ref<HTMLElement | null>
): void => {
  function stopPropagination(ev: MouseEvent) {
    ev.stopPropagation()
  }

  if (element.value instanceof HTMLElement)
    element.value.addEventListener('click', stopPropagination)

  window.addEventListener('click', cb)

  onUnmounted(() => {
    if (element.value instanceof HTMLElement)
      element.value.removeEventListener('click', stopPropagination)
    window.removeEventListener('click', cb)
  })
}
