<template>
  <div class="board-link-list">
    <BoardLink v-for="board in boardList" :key="board.id" :link="board" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Link } from '../../../components/Link'
  import BoardLink from './BoardLinkItem.vue'

  const boardList = ref<Link[]>([
    {
      title: 'Some title',
      id: '0',
      type: 'board',
    },
    {
      title: 'Some title',
      id: '1',
      type: 'board',
    },
    {
      title: 'Some title',
      id: '2',
      type: 'board',
    },
    {
      title: 'Some title',
      id: '3',
      type: 'board',
    },
  ])
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

    .board-link-item {
      display: flex;
      flex: 0 0 24%;
      background-color: var(--el-color-info-light-9);
      height: 9rem;
      border-radius: 0.5rem;
      box-shadow: var(--el-box-shadow-light);

      &:hover {
        box-shadow: var(--el-box-shadow);
      }
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

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
