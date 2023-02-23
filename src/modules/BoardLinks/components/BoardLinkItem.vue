<template>
  <div class="board-link-item">
    <BaseLink class="link" :link="link" />
  </div>
</template>

<script setup lang="ts">
  import BaseLink from '../../../components/Link/BaseLink.vue'
  import { Link } from '../../../components/Link/types'

  defineProps<{
    link: Link
  }>()
</script>

<style scoped lang="scss">
  .board-link-item {
    display: flex;
    background-color: var(--el-color-info-light-9);
    width: 320px;
    height: 180px;
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
  }
</style>
