<template>
  <component :is="layout" class="wrapper">
    <router-view />
  </component>
  <BaseToasts />
  <BaseSpinner />
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import BaseToasts from './components/Toast/BaseToasts.vue'
  import BaseSpinner from './components/BaseSpinner.vue'
  import { LayoutType } from './layout/layout.type'

  const EmptyLayout = defineAsyncComponent(() => import('./layout/EmptyLayout.vue'))
  const DefaultLayput = defineAsyncComponent(() => import('./layout/DefaultLayout.vue'))

  const route = useRoute()

  const layoutMap: Record<LayoutType, unknown> = {
    EmptyLayout: EmptyLayout,
    DefaultLayout: DefaultLayput,
  }
  const layout = computed<unknown>(() => layoutMap[route.meta.layout])
</script>

<style scoped lang="scss">
  .wrapper {
    background: var(--el-color-info-light-8);
    color: var(--el-text-color-primary);
    transition: color 0.3s, background 0.3s;
  }
</style>
