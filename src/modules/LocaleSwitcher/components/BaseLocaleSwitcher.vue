<template>
  <el-dropdown size="large" trigger="click">
    <span class="el-dropdown-link">
      <div class="locale-dropdown">{{ capitalize(locale) }}</div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="availableLocale in availableLocales"
          :key="availableLocale"
          @click="changeLocale(availableLocale as SupportLocalesEnum)"
        >
          {{ capitalize(availableLocale) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import { SupportLocalesEnum } from '../../../locales/types'

  const { locale } = useI18n()
  const router = useRouter()

  const availableLocales = [...Object.values(SupportLocalesEnum)]

  async function changeLocale(newLocale: SupportLocalesEnum) {
    router.replace({ params: { locale: newLocale } })
  }

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
</script>

<style scoped lang="scss">
  .locale-dropdown {
    cursor: pointer;
    font-size: 1.25rem;
    color: var(--el-text-color-primary);
  }
</style>
