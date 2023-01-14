<template>
  <div class="header">
    <div class="header-top flex justify-between pb-5 max-sm:flex-col max-sm:items-center">
      <h3 class="title text-2xl flex items-center max-sm:mb-5">
        {{ boardTitle }}
      </h3>
      <SearchInput :search-resource="[{}]" placeholder="Введите id или название задачи" />
    </div>
    <div
      class="header-bottom flex justify-between mb-5 max-sm:flex-col max-sm:items-center"
    >
      <TagBadge class="max-sm:mb-5" title="tag" color="red" />
      <BoardSettings />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SearchInput from '../common/SearchInput.vue'
  import TagBadge from '../common/TagBadge.vue'
  import BoardSettings from './BoardSettings.vue'

  const props = defineProps<{
    boardTitle: string
  }>()
</script>
