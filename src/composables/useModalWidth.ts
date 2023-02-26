import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

export const useModalWidth = () => {
  const windowWidth = ref<number>(0)
  const modalWidth = computed<number>(() => {
    if (windowWidth.value > 1400) return windowWidth.value / 40
    if (windowWidth.value > 1200) return windowWidth.value / 30
    if (windowWidth.value > 1000) return windowWidth.value / 22
    if (windowWidth.value > 900) return windowWidth.value / 18
    if (windowWidth.value > 800) return windowWidth.value / 14
    if (windowWidth.value > 700) return windowWidth.value / 10
    if (windowWidth.value > 600) return windowWidth.value / 8
    if (windowWidth.value > 500) return windowWidth.value / 7
    return windowWidth.value / 6
  })

  onMounted(() => {
    setWindowWidth()
    window.addEventListener('resize', setWindowWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', setWindowWidth)
  })

  function setWindowWidth() {
    windowWidth.value = window.innerWidth
  }

  return modalWidth
}
