<template>
  <div
    class="flex-triple max-lg:flex-double max-md:flex-single bg-primary-soft h-36 rounded-card shadow-lg"
  >
    <router-link
      :to="`board/${id}`"
      :key="id"
      class="board-link-item flex justify-center items-center w-full h-full overflow-hidden"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    requried: true,
  },
})
</script>
