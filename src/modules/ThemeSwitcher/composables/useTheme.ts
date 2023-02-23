import { ref } from 'vue'

const darkTheme = ref<boolean>(false)

export const useTheme = () => {
  return { darkTheme }
}
