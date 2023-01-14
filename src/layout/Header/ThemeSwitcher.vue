<template>
  <button id="theme-btn" class="bg-secondary p-2 rounded-btn" @click="switchTheme">
    Switch theme
  </button>
</template>

<script setup lang="ts">
  import { useLocalStorage, LocalStorageKeys } from '../../utils/useLocalStorage'

  const ls = useLocalStorage()

  const d = document.documentElement,
    currentTheme = ls.get(LocalStorageKeys.Theme)

  if (currentTheme == 'dark') {
    d.classList.add('theme-dark')
  }

  function switchTheme() {
    if (d.classList.contains('theme-dark')) {
      d.classList.remove('theme-dark')
      ls.remove(LocalStorageKeys.Theme)
    } else {
      d.classList.add('theme-dark')
      ls.set(LocalStorageKeys.Theme, 'dark')
    }
  }
</script>
