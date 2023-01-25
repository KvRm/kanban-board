<template>
  <header
    class="header flex w-full h-16 shadow-md text-xl px-2 justify-between text-primary bg-primary-soft max-sm:text-lg"
  >
    <nav class="header-nav flex items-center gap-4">
      <router-link class="header-nav__link flex items-center h-full relative" to="/">
        Мои доски
      </router-link>
      <router-link class="header-nav__link flex items-center h-full relative" to="/my-tasks">
        Мои задачи
      </router-link>
    </nav>
    <ThemeSwitcher />
  </header>
</template>

<script setup lang="ts">
  import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<style scoped>
  .router-link-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-bg-secondary);
    height: 4px;
  }
</style>
