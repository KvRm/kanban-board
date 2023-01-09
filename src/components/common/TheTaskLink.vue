<template>
  <router-link class="hover:text-blue" :to="link">
    {{ taskLink.title }}
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TaskLink } from '../../types/task'

const props = defineProps<{
  taskLink: TaskLink
}>()

const link = computed(
  () => `board/${props.taskLink.board.id}/${props.taskLink.prefix}-${props.taskLink.id}`,
)
</script>
