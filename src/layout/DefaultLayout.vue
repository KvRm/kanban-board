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
    .main {
      padding: 0 3rem;
      padding-top: 6rem;
      @media screen and (max-width: 900px) {
        padding: 0 1rem;
        padding-top: 6rem;
      }
    }
  }
</style>
