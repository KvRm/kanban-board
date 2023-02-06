<template>
  <component :is="layout" class="wrapper">
    <Transition name="item" appear>
      <router-view />
    </Transition>
  </component>
  <ToastsContainer />
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import ToastsContainer from './components/Toast/BaseToasts.vue'
  import { LayoutType } from './layout/layout.type'
  import { useI18n } from 'vue-i18n'
  import { useLocale } from './composables/useLocale'

  const props = defineProps<{
    locale: string
  }>()

  const route = useRoute()
  const { locale } = useI18n()
  const { loadLocaleMessages } = useLocale()

  const layout = computed<LayoutType>(() => route.meta.layout || 'DefaultLayout')

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

  .item-move,
  .item-enter-active,
  .item-leave-active {
    transition: all 0.5s ease;
  }
  .item-enter-from,
  .item-leave-to {
    opacity: 0;
    transform: translateY(-500px);
  }
  .item-leave-active {
    position: absolute;
  }
</style>
