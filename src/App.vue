<template>
  <component :is="layout" class="wrapper">
    <router-view />
  </component>
  <BaseToasts />
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import { LayoutType } from './layout/types'
  import BaseToasts from './modules/Toast/components/BaseToasts.vue'
  import { AsyncComponent } from './typings/async-component'

  const EmptyLayout = defineAsyncComponent(() => import('./layout/EmptyLayout.vue'))
  const DefaultLayput = defineAsyncComponent(() => import('./layout/DefaultLayout.vue'))

  const route = useRoute()

  const layoutMap: Record<LayoutType, AsyncComponent> = {
    EmptyLayout: EmptyLayout,
    DefaultLayout: DefaultLayput,
  }
  const layout = computed<AsyncComponent>(() => layoutMap[route.meta.layout])
</script>

<style scoped lang="scss">
  .wrapper {
    background: var(--el-color-info-light-8);
    color: var(--el-text-color-primary);
    transition: color 0.3s, background 0.3s;
  }
</style>
