<template>
  <div
    class="flex-triple max-lg:flex-double max-md:flex-single bg-primary-soft h-36 rounded-card shadow-lg hover:shadow-xl"
  >
    <router-link
      :to="`board/${id}`"
      :key="id"
      class="board-link-item flex justify-center items-center w-full h-full overflow-hidden"
    >
      {{ title }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  id: string
}>()
</script>
