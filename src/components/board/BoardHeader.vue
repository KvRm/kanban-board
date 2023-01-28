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
      <div class="sort-tags flex gap-6 max-sm:mb-5">
        <div class="choosen-tags">
          <span>Сортировать по:</span>
          <TagList
            :tags="sortingTags"
            :removable-tags="true"
            @close-btn-click="removeTag"
          />
        </div>
        <div class="all-tags">
          <span>Все теги:</span>
          <TagList :tags="tags" @tag-click="addTag" />
        </div>
      </div>
      <BoardSettings />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ColorEnum } from '../../types/common/colors'
  import { Tag } from '../../types/common/tag.type'
  import SearchInput from '../SearchInput.vue'
  import BoardSettings from './BoardSettings.vue'
  import TagList from '../TagList.vue'

  const props = defineProps<{
    boardTitle: string
  }>()

  const tags = ref<Tag[]>([
    {
      title: 'tag',
      color: ColorEnum.Blue,
    },
    {
      title: 'tags',
      color: ColorEnum.Green,
    },
    {
      title: 'no',
      color: ColorEnum.DarkRed,
    },
  ])

  const sortingTags = ref<Tag[]>([])

  function addTag(payload: string) {
    const [title, color] = payload.split(' ')

    const transferingTag: Tag | undefined = tags.value.find((tag) => {
      if (tag.title === title && tag.color === color) return tag
    })

    if (transferingTag) {
      tags.value = tags.value.filter((tag) =>
        tag.title !== title && tag.color !== color ? true : false
      )
      sortingTags.value.push(transferingTag)
    }
  }

  function removeTag(payload: string) {
    const [title, color] = payload.split(' ')

    const transferingTag: Tag | undefined = sortingTags.value.find((tag) => {
      if (tag.title === title && tag.color === color) return tag
    })

    if (transferingTag) {
      sortingTags.value = sortingTags.value.filter((tag) =>
        tag.title !== title && tag.color !== color ? true : false
      )
      tags.value.push(transferingTag)
    }
  }
</script>
