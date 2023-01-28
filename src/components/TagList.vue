<template>
  <div class="tag-list flex gap-1">
    <TagBadge
      v-for="tag in definedTags"
      :key="tag.title + tag.color"
      :tag="tag"
      @tag-click="handleTagClick"
      @close-btn-click="handleCloseBtnClick"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Tag } from '../../types/common/tag.type'
  import TagBadge from './TagBadge.vue'

  const props = defineProps<{
    tags: Tag[]
    removableTags?: boolean
  }>()

  const definedTags = computed<Tag[]>(() =>
    !props.removableTags
      ? props.tags
      : props.tags.map((t) => {
          return { ...t, removableTag: true }
        })
  )

  const emit = defineEmits<{
    (e: 'closeBtnClick', value: string): void
    (e: 'tagClick', value: string): void
  }>()

  function handleTagClick(payload: string) {
    emit('tagClick', payload)
  }

  function handleCloseBtnClick(payload: string) {
    emit('closeBtnClick', payload)
  }
</script>
