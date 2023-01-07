<template>
  <component :is="layout" class="bg-primary">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed<string>(() => (route.meta.layout as string) || 'default-layout')
</script>
