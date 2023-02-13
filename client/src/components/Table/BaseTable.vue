<template>
  <table class="base-table">
    <thead class="header">
      <tr>
        <th v-for="category in categories" :key="category.title">
          <div class="header-content">
            <p>{{ t(category.title) }}</p>
            <span v-if="category.sortable" class="sort-buttons">
              <FontAwesomeIcon
                icon="fa-solid fa-sort-up"
                class="icon-up"
                :class="{
                  choosen: isChoosen(category.title, 'increasing'),
                }"
                @click="
                  chooseSort(
                    category.title,
                    'increasing',
                    category.sortable as unknown as SortTypeEnum
                  )
                "
              />
              <FontAwesomeIcon
                icon="fa-solid fa-sort-down"
                class="icon-down"
                :class="{ choosen: isChoosen(category.title, 'decreasing') }"
                @click="
                  chooseSort(
                    category.title,
                    'decreasing',
                    category.sortable as unknown as SortTypeEnum
                  )
                "
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
  import { reactive, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { SortParams, SortOrderType, TableCategory, SortTypeEnum } from '.'

  const { t } = useI18n()

  const props = defineProps<{
    categories: TableCategory[]
  }>()

  const emit = defineEmits<{
    (e: 'sort', payload: SortParams): void
  }>()

  const sortParams = reactive<SortParams>({
    category: null,
    order: null,
    type: null,
  })

  watch(sortParams, () => {
    emit('sort', sortParams)
  })

  function chooseSort(category: string, order: SortOrderType, type: SortTypeEnum): void {
    if (sortParams.category === category && sortParams.order === order) {
      return
    }

    sortParams.category = category
    sortParams.order = order
    sortParams.type = type
  }

  function isChoosen(category: string, order: SortOrderType): boolean {
    return category === sortParams.category && order === sortParams.order
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
          width: 10px;
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
