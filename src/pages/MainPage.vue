<template>
  <section class="storefront">
    <div class="storefront-item">
      <p v-if="boardLinksStore.myBoardLinks.length" class="storefront-title">
        {{ t('myBoards') }}
      </p>
      <BoardLinkList
        :board-links-list="boardLinksStore.myBoardLinks"
        :loading="boardLinksStore.loading"
      />
    </div>

    <div class="storefront-item">
      <p v-if="boardLinksStore.allAvailableBoardLinks.length" class="storefront-title">
        {{ t('allBoards') }}
      </p>
      <BoardLinkList
        :board-links-list="boardLinksStore.allAvailableBoardLinks"
        :loading="boardLinksStore.loading"
      />
    </div>

    <div class="storefront-item">
      <p
        v-if="
          !boardLinksStore.myBoardLinks.length &&
          !boardLinksStore.allAvailableBoardLinks.length &&
          !boardLinksStore.loading
        "
        class="storefront-title"
      >
        Похоже у вас нет доступных досок
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import BoardLinkList from '../modules/BoardLinks/components/BoardLinkList.vue'
  import { useBoardLinksStore } from '../modules/BoardLinks/stores/boardLinksStore'

  const { t } = useI18n()
  const boardLinksStore = useBoardLinksStore()

  onMounted(() => {
    boardLinksStore.loadMyAndAvailableBoardLinks()
  })
</script>

<style scoped lang="scss">
  .storefront {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 96px);

    .storefront-item {
      margin-top: 1rem;
      &:first-child {
        margin-top: 0;
      }
      .storefront-title {
        text-align: center;
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
    }
  }
</style>
