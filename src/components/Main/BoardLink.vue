<template>
  <div
    class="flex-triple max-lg:flex-double max-md:flex-single bg-primary-soft h-36 rounded-card shadow-lg hover:shadow-xl"
  >
    <router-link
      :to="'board/' + link.id"
      :key="link.id"
      class="board-link-item flex justify-center items-center w-full h-full overflow-hidden"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { Link } from '../../types/common'

defineProps<{
  link: Link
}>()
</script>
