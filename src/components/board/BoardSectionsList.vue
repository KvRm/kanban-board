<template>
  <section class="h-screen">
    <BoardSectionItem v-for="section in sections" :key="section.id" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BoardSectionItem from './BoardSectionItem.vue'

const sections = ref<BoardStatusSection>({
  id: '1',
  title: 'Важно',
  tasks: [{}],
})
</script>
