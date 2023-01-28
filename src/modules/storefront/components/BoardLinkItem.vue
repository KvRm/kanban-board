<template>
  <div class="board-link-item">
    <BaseLink class="link" :link="link" />
  </div>
</template>

<script setup lang="ts">
  import BaseLink from '../../../components/link/BaseLink.vue'
  import { Link } from '../../../components/link'

  defineProps<{
    link: Link
  }>()
</script>

<style scoped lang="scss">
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
</style>
