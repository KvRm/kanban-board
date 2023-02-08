<template>
  <component :is="$route.meta.layout" class="wrapper">
    <router-view />
  </component>
  <ToastsContainer />
</template>

<script setup lang="ts">
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'
  import ToastsContainer from './components/Toast/BaseToasts.vue'
  import { useI18n } from 'vue-i18n'
  import { useLocale } from './composables/useLocale'

  const props = defineProps<{
    locale: string
  }>()

  const route = useRoute()
  const { locale } = useI18n()
  const { loadLocaleMessages } = useLocale()

  watch(route, () => {
    setLocale()
  })

  async function setLocale() {
    const currentLocale = route.params.locale as string

    await loadLocaleMessages(currentLocale)
    locale.value = currentLocale
  }
</script>

<style scoped lang="scss">
  .wrapper {
    background: var(--el-color-info-light-8);
    color: var(--el-text-color-primary);
    transition: color 0.3s, background 0.3s;
  }
</style>
