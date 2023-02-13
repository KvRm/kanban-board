import { ref } from 'vue'

const isSpinnerActive = ref<boolean>(false)

export const useSpinner = () => {
  return isSpinnerActive
}
