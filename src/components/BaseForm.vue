<template>
  <form @submit.prevent>
    <slot name="header" />
    <slot name="main" />
    <slot name="footer" />
  </form>
</template>

<script setup lang="ts"></script>
