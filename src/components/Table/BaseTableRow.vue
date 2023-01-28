<template>
  <tr class="table-row max-lg:rounded-btn mb-2 px-4 py-2">
    <slot />
  </tr>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .table-row {
    border: 1px solid var(--el-border-color);

    @media (min-width: 1024px) {
      border-bottom-width: 1px;

      &:hover {
        background: var(--el-color-info-8);
      }

      &:last-child {
        border-style: none;
      }
    }

    @media not all and (min-width: 1024px) {
      display: block;
      border-width: 1px;
    }
  }
</style>
