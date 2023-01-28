<template>
  <component :is="layout" class="wrapper">
    <router-view />
  </component>
  <ToastsContainer />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import ToastsContainer from './components/ToastsContainer.vue'
  import { LayoutType } from './typings/common'

  const route = useRoute()
  const layout = computed<LayoutType>(() => route.meta.layout || 'DefaultLayout')
</script>

<style scoped lang="scss">
  .wrapper {
    background: var(--el-color-info-light-8);
    transition: color 0.3s, background 0.3s;
  }
</style>
