<template>
  <table class="base-table">
    <thead class="header">
      <tr>
        <th v-for="category in categories" :key="category">
          <div class="header-content">
            <p>{{ category }}</p>
            <span class="sort-buttons">
              <FontAwesomeIcon
                icon="fa-solid fa-sort-up"
                class="icon-up"
                :class="{ choosen: isChoosen(category, 'increasing') }"
                @click="sort(category, 'increasing')"
              />
              <FontAwesomeIcon
                icon="fa-solid fa-sort-down"
                class="icon-down"
                :class="{ choosen: isChoosen(category, 'decreasing') }"
                @click="sort(category, 'decreasing')"
              />
            </span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { SortParams, SortType } from '.'

  const props = defineProps<{
    categories: string[]
  }>()

  const sortParams = reactive<SortParams>({
    category: null,
    type: null,
  })

  function sort(category: string, type: SortType): void {
    console.log('sss')

    if (sortParams.category === category && sortParams.type === type) {
      sortParams.category = null
      sortParams.type = null
      return
    }

    sortParams.category = category
    sortParams.type = type
  }

  function isChoosen(category: string, type: SortType): boolean {
    return category === sortParams.category && type === sortParams.type
  }
</script>

<style scoped lang="scss">
  .base-table {
    table-layout: fixed;
    width: 100%;
    min-width: 1400px;

    .header {
      border-bottom: 1px solid var(--el-color-info-light-3);
      .header-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem;
        padding-bottom: 0.75rem;
        .sort-buttons {
          position: relative;
          .choosen {
            color: var(--el-color-primary);
          }
          .icon-up {
            position: absolute;
            bottom: -6px;
            cursor: pointer;
          }
          .icon-down {
            position: absolute;
            top: -4px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
