<template>
  <div class="default-layout">
    <BaseHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  import BaseHeader from '../components/Header/BaseHeader.vue'
</script>

<style scoped lang="scss">
  .default-layout {
    .main {
      padding: 0 0.5rem;
      padding-top: 5rem;
    }
  }
</style>
