import { onMounted, onUnmounted, Ref } from 'vue'
import { VoidFunction } from '../types/common'

export const useClickOutside = (
  cb: VoidFunction,
  element: Ref<HTMLElement | null>
): void => {
  function handleClick(ev: MouseEvent) {
    if (ev.target instanceof HTMLElement) console.log(!element.value?.contains(ev.target))
    if (
      ev.target instanceof HTMLElement &&
      element.value === ev.target &&
      !element.value?.contains(ev.target)
    ) {
      cb()
    }
  }

  onMounted(() => window.addEventListener('click', (ev) => handleClick(ev)))
  onUnmounted(() => window.removeEventListener('click', (ev) => handleClick(ev)))
}
