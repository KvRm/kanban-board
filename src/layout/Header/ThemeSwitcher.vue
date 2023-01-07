<template>
  <button id="theme-btn" class="bg-secondary p-2 rounded-btn" @click="switchTheme">
    Switch theme
  </button>
</template>

<script setup lang="ts">
import { useLocalStorage, LocalStorageKeys } from '../../composables/localStorage'

const ls = useLocalStorage()

const d = document.documentElement,
  currentTheme = ls.get(LocalStorageKeys['theme-dark'])

if (currentTheme == 'dark') {
  d.classList.add('theme-dark')
}

function switchTheme() {
  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark')
    localStorage.removeItem('theme')
  } else {
    d.classList.add('theme-dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>
