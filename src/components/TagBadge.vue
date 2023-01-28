<template>
  <div class="tag rounded text-white px-1 py-0.5 w-max" :class="`bg-${tag.color}`">
    <span class="cursor-pointer" @click="handleTagClick">{{ tag.title }}</span>
    <button v-if="tag.removableTag" class="ml-1" @click="handleCloseBtnClick">
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Tag } from '../../types/common/tag.type'

  const props = defineProps<{
    tag: Tag
  }>()

  const emit = defineEmits<{
    (e: 'tagClick', value: string): void
    (e: 'closeBtnClick', value: string): void
  }>()

  const tagId = computed<string>(() => props.tag.title + ' ' + props.tag.color)

  function handleTagClick() {
    emit('tagClick', tagId.value)
  }

  function handleCloseBtnClick() {
    emit('closeBtnClick', tagId.value)
  }
</script>
