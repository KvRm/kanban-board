<template>
  <div class="board-header">
    <div class="header-row">
      <h3 class="board-title">
        {{ boardTitle }}
      </h3>
      <BoardSettings />
    </div>
    <div class="header-row">
      <div class="sort-tags">
        <div class="choosen-tags">
          <span>Сортировать по:</span>
        </div>
        <div class="all-tags">
          <span>Все теги:</span>
        </div>
      </div>
      <SearchInput :search-resource="[{}]" placeholder="Введите id или название задачи" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import SearchInput from '../../../components/SearchInput.vue'
  import BoardSettings from './BoardSettings.vue'
  import { Tag } from '../../../typings/tag'

  const props = defineProps<{
    boardTitle: string
  }>()

  const tags = ref<Tag[]>([
    { type: '', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'danger', label: 'Tag 4' },
    { type: 'warning', label: 'Tag 5' },
  ])

  const sortingTags = ref<Tag[]>([])

  // function addTag(payload: string) {
  //   const [title, color] = payload.split(' ')

  //   const transferingTag: Tag | undefined = tags.value.find((tag) => {
  //     if (tag.label === title && tag.color === color) return tag
  //   })

  //   if (transferingTag) {
  //     tags.value = tags.value.filter((tag) =>
  //       tag.label !== title && tag.color !== color ? true : false
  //     )
  //     sortingTags.value.push(transferingTag)
  //   }
  // }

  // function removeTag(payload: string) {
  //   const [title, color] = payload.split(' ')

  //   const transferingTag: Tag | undefined = sortingTags.value.find((tag) => {
  //     if (tag.label === title && tag.color === color) return tag
  //   })

  //   if (transferingTag) {
  //     sortingTags.value = sortingTags.value.filter((tag) =>
  //       tag.label !== title && tag.color !== color ? true : false
  //     )
  //     tags.value.push(transferingTag)
  //   }
  // }
</script>

<style scoped lang="scss">
  .board-header {
    .header-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.25rem;

      @media not all and (min-width: 840px) {
        flex-direction: column;
        align-items: center;
      }
      .board-title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        line-height: 2rem;

        @media not all and (min-width: 840px) {
          margin-bottom: 1.25rem;
        }
      }
      .sort-tags {
        display: flex;
        gap: 1.5rem;

        @media not all and (min-width: 840px) {
          margin-bottom: 1.25rem;
        }
      }
    }
  }
</style>
