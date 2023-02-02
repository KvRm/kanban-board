<template>
  <div class="default-layout">
    <BaseHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  import BaseHeader from '../components/BaseHeader.vue'
</script>

<style scoped lang="scss">
  .default-layout {
    min-height: 100vh;
    .main {
      padding: 0 0.5rem;
      height: 100%;
      padding-top: 5rem;
    }
  }
</style>
