<template>
  <div class="board-link-list">
    <template v-if="loading">
      <div v-for="i in 6" class="preloader-container">
        <ContentLoader
          class="preloader-item"
          height="144"
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
  import { Link } from '../../../components/Link'
  import BoardLink from './BoardLinkItem.vue'
  import { ContentLoader } from 'vue-content-loader'

  defineProps<{
    boardLinksList: Link[]
    loading: boolean
  }>()
</script>

<style scoped lang="scss">
  .board-link-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;

    @media not all and (min-width: 768px) {
      margin-right: 2.5rem;
    }
    @media not all and (min-width: 640px) {
      margin-right: 0px;
    }
    .preloader-container {
      display: flex;
      justify-content: center;
      flex: 0 0 24%;
      height: 9rem;
      border-radius: 0.5rem;
      overflow: hidden;

      @media not all and (min-width: 1700px) {
        flex: 0 0 31%;
      }
      @media not all and (min-width: 1024px) {
        flex: 0 0 45%;
      }
      @media not all and (min-width: 768px) {
        flex: 0 0 100%;
      }
    }
  }
</style>
