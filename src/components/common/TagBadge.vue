<template>
  <div class="tag rounded text-white px-1 py-0.5" :class="`bg-${color}`">tag</div>
</template>

<script setup lang="ts">
  import { colorEnum } from '../../types/common/colors'

  defineProps<{
    color: colorEnum
  }>()
</script>
