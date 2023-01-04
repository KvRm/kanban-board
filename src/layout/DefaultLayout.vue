<template>
  <div class="layout h-screen">
    <HeaderComponent />
    <div class="main px-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './Header/HeaderComponent.vue'
</script>
