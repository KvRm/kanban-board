<template>
  <component :is="layout" class="bg-primary">
    <router-view />
  </component>
  <ToastsContainer />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import ToastsContainer from './components/common/ToastsContainer.vue'
  import { LayoutType } from './types/common'

  const route = useRoute()
  const layout = computed<LayoutType>(() => route.meta.layout || 'DefaultLayout')
</script>
