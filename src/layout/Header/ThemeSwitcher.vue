<template>
  <el-switch
    class="theme-switcher flex self-center"
    v-model="theme"
    inline-prompt
    active-text="Dark"
    inactive-text="Light"
    style="
      --el-switch-on-color: var(--el-color-info-light-5);
      --el-switch-off-color: var(--el-color-info-light-5);
    "
    :size="'default'"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useLocalStorage, LocalStorageKeys } from '../../lib/useLocalStorage'

  const ls = useLocalStorage()
  const theme = ref<boolean>()
  const d = document.documentElement

  onMounted(() => {
    theme.value = ls.get(LocalStorageKeys.Theme) === 'dark' ? true : false

    if (theme.value) {
      d.classList.add('dark')
    }
  })

  watch(theme, () => {
    if (!theme.value) {
      d.classList.remove('dark')
      ls.remove(LocalStorageKeys.Theme)
    } else {
      d.classList.add('dark')
      ls.set(LocalStorageKeys.Theme, 'dark')
    }
  })
</script>

<style scoped lang="scss">
  .theme-switcher {
    color: var(--el-text-color-primary);
  }
</style>
