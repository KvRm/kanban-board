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
  import { useTheme } from '../../composables/useTheme'

  const { darkTheme } = useTheme()
</script>

<style scoped lang="scss">
  .theme-switcher {
    color: var(--el-text-color-primary);
  }
</style>
