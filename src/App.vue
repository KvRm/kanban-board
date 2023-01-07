<template>
  <component :is="layout" class="bg-primary">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { LayoutType } from './types/common'

const route = useRoute()

const layout = computed<LayoutType>(() => route.meta.layout || 'DefaultLayout')
</script>
