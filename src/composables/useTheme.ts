import { onMounted, ref, watch } from 'vue'
import { useLocalStorage, LocalStorageKeys } from '../lib/useLocalStorage'

const darkTheme = ref<boolean>(false)

const ls = useLocalStorage()
const d = document.documentElement

export const useTheme = () => {
  onMounted(() => {
    darkTheme.value = ls.get(LocalStorageKeys.Theme) === 'dark' ? true : false

    if (darkTheme.value) {
      d.classList.add('dark')
    }
  })

  watch(darkTheme, () => {
    if (!darkTheme.value) {
      d.classList.remove('dark')
      ls.remove(LocalStorageKeys.Theme)
    } else {
      d.classList.add('dark')
      ls.set(LocalStorageKeys.Theme, 'dark')
    }
  })

  return { darkTheme }
}
