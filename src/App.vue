<template>
  <component :is="layout">
    <router-view />
  </component>

  <!-- <button id="theme-btn" class="bg-secondary p-2 rounded-btn" @click="switchTheme">
      Switch theme
    </button> -->
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed<string>(() => (route.meta.layout as string) || 'default-layout')

// Toggle Dark Theme
var d = document.documentElement,
  t = document.querySelector('#theme-btn'),
  m = localStorage.getItem('theme')

if (m == 'dark') {
  d.classList.add('theme-dark')
}

function switchTheme() {
  console.log('click')

  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark')
    localStorage.removeItem('theme')
  } else {
    d.classList.add('theme-dark')
    localStorage.setItem('theme', 'dark')
  }
}
</script>

<script lang="ts"></script>
