<template>
  <tr class="table-row">
    <slot />
  </tr>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .table-row {
    border-bottom: 1px solid var(--el-border-color);
    margin-bottom: 0.5rem;

    &:hover {
      background: var(--el-color-info-light-7);
    }

    &:last-child {
      border: none;
    }
  }
</style>
