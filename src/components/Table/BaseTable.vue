<template>
  <table class="base-table">
    <thead class="header">
      <tr>
        <th v-for="category in categories" :key="category" class="header-item p-1 pb-3">
          <p>{{ category }}</p>
          <span class="sort-buttons">
            <FontAwesomeIcon icon="fa-solid fa-sort-up" />
            <FontAwesomeIcon icon="fa-solid fa-sort-down" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
  const props = defineProps<{
    categories: string[]
  }>()
</script>

<style scoped lang="scss">
  .base-table {
    table-layout: fixed;
    width: 100%;

    @media not all and (min-width: 1024px) {
      border-style: none;
    }
    .header {
      border: 1px solid var(--el-border-color);

      @media (min-width: 1024px) {
        border-bottom-width: 1px;
      }

      @media not all and (min-width: 1024px) {
        display: none;
      }

      .header-item {
        .sort-buttons {
          position: absolute;
          right: 0;
        }
      }
    }
  }
</style>
