<template>
  <div class="layout min-h-screen">
    <HeaderComponent class="absolute z-50" />
    <div class="main px-2 h-full pt-20">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from './Header/TheHeader.vue'
</script>
