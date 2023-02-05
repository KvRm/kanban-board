<template>
  <section class="storefront">
    <section class="storefront-main">
      <p class="board-list-titile">{{ t('myBoards') }}</p>
      <BoardLinkList />
      <p class="board-list-titile">{{ t('allBoards') }}</p>
      <BoardLinkList />
    </section>
    <aside class="storefront-aside">
      <TaskHistory />
    </aside>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import BoardLinkList from '../components/BoardLinkList.vue'
  import TaskHistory from '../components/TaskHistory.vue'

  const { t } = useI18n()
</script>

<style scoped lang="scss">
  .storefront {
    display: flex;
    min-height: calc(100vh - 80px);

    @media not all and (min-width: 640px) {
      flex-direction: column-reverse;
    }
    .storefront-main {
      width: 75%;

      @media not all and (min-width: 1024px) {
        width: 65%;
      }
      @media not all and (min-width: 640px) {
        width: 100%;
      }

      .board-list-titile {
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
        font-weight: 700;
        padding-bottom: 1rem;
      }
    }
    .storefront-aside {
      width: 25%;

      @media not all and (min-width: 1024px) {
        width: 35%;
      }

      @media not all and (min-width: 640px) {
        width: 100%;
      }
    }
  }
</style>
