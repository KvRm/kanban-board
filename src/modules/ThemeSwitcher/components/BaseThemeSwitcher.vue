<template>
  <ElSwitch
    class="theme-switcher flex self-center"
    v-model="darkTheme"
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
  import { onMounted, watch } from 'vue'
  import { LocalStorageKeys, useLocalStorage } from '../../../lib/useLocalStorage'
  import { useTheme } from '../composables/useTheme'

  const ls = useLocalStorage()
  const d = document.documentElement
  const { darkTheme } = useTheme()

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
</script>

<style scoped lang="scss">
  .theme-switcher {
    color: var(--el-text-color-primary);
  }
</style>
