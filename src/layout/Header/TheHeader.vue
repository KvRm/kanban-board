<template>
  <header
    class="header flex w-full h-16 shadow-md text-xl px-2 justify-between text-primary bg-primary-soft max-sm:text-lg"
  >
    <nav class="header-nav flex items-center gap-4">
      <router-link class="header-nav__link" to="/">На главную</router-link>
      <router-link class="header-nav__link" to="/my-tasks">Мои задачи</router-link>
    </nav>
    <ThemeSwitcher />
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>
