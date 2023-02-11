<template>
  <section class="storefront">
    <section class="storefront-main">
      <p v-if="myBoardLinks.length" class="board-list-titile">{{ t('myBoards') }}</p>
      <BoardLinkList :board-links-list="myBoardLinks" :loading="loading" />
      <p v-if="allAvailableBoardLinks.length" class="board-list-titile">
        {{ t('allBoards') }}
      </p>
      <BoardLinkList :board-links-list="allAvailableBoardLinks" :loading="loading" />
      <p
        v-if="!myBoardLinks.length && !allAvailableBoardLinks.length"
        class="board-list-titile"
      >
        Похоже у вас нет доступных досок
      </p>
    </section>
    <aside class="storefront-aside">
      <TaskHistory />
    </aside>
  </section>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { Link } from '../../../components/Link'
  import BoardLinkList from '../components/BoardLinkList.vue'
  import TaskHistory from '../components/TaskHistory.vue'
  import { useBoardLinksStore } from '../stores/boardLinksStore'

  const { t } = useI18n()
  const boardLinksStore = useBoardLinksStore()

  const loading = computed<boolean>(() => boardLinksStore.loading)
  const myBoardLinks = computed<Link[]>(() => boardLinksStore.myBoardLinks)
  const allAvailableBoardLinks = computed<Link[]>(
    () => boardLinksStore.allAvailableBoardLinks
  )

  onMounted(() => {
    boardLinksStore.getMyAndAvailableBoardLinks()
  })
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
