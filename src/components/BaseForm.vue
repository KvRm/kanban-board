<template>
  <form @submit.prevent="$emit('submit')">
    <slot name="header" />
    <slot name="main" />
    <slot name="footer" />
  </form>
</template>

<script setup lang="ts">
  defineEmits<{
    (e: 'submit'): void
  }>()
</script>
