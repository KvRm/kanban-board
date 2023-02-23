<template>
  <div class="board-link-list">
    <template v-if="loading">
      <div v-for="i in 8" class="preloader-container">
        <ContentLoader
          class="preloader-item"
          view-box="0 0 320 180"
          primary-color="var(--el-color-info-light-3)"
          secondary-color="var(--el-color-info-light-5)"
          :primary-opacity="0.3"
        />
      </div>
    </template>
    <template v-else>
      <BoardLink
        v-for="boardLink in boardLinksList"
        :key="boardLink.id"
        :link="boardLink"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
  import BoardLink from './BoardLinkItem.vue'
  import { ContentLoader } from 'vue-content-loader'
  import { Link } from '../../../components/Link/types'

  defineProps<{
    boardLinksList: Link[]
    loading: boolean
  }>()
</script>

<style scoped lang="scss">
  .board-link-list {
    display: grid;
    justify-content: center;
    grid: minmax(1rem, max-content) / repeat(auto-fill, 320px);
    gap: 1rem;
    .preloader-container {
      display: flex;
      justify-content: center;
      border-radius: 0.5rem;
      overflow: hidden;
    }
  }
</style>
