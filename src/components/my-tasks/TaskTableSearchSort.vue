<template>
  <div
    class="search-sort flex mb-3 justify-between max-sm:flex-col max-sm:gap-4 max-sm:text-center"
  >
    <SearchInput :searchResource="['ss', 'aa']" />

    <div class="sort flex gap-4 max-sm:justify-center">
      <DropdownInput
        :items="dropdownItems"
        :placeholderText="'Сортировать по'"
        :dropdownKey="'categories'"
        @dropdownSelect="selectSortCategory"
      />

      <div class="sort-type flex items-center">
        <FontAwesomeIcon
          :icon="`fa-solid fa-arrow-${sortTypeIconName}-wide-short`"
          class="h-6 text-secondary cursor-pointer"
          @click="toggleSortType"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DropdownInput from '../common/DropdownInput.vue'
import SearchInput from '../common/SearchInput.vue'
import type { SortParams, SortType } from './sort-params.type'
import { TableCategories } from './table-task-item.type'

const emit = defineEmits<{
  (e: 'selectSortParams', sortParams: SortParams): void
  (e: 'search', text: string): void
}>()

const sortParams = ref<SortParams>({
  category: '',
  sortBy: 'increasing',
})

const sortTypeIconName = computed<'up' | 'down'>(() =>
  sortParams.value.sortBy === 'decreasing' ? 'down' : 'up',
)

const dropdownItems = [
  TableCategories['Идентификатор задачи'],
  TableCategories['Название задачи'],
  TableCategories['Доска'],
  TableCategories['Статус'],
  TableCategories['Критичность'],
  TableCategories['Крайний срок'],
  TableCategories['Автор'],
]

function selectSortCategory(value: string) {
  sortParams.value.category = value
}

function toggleSortType() {
  sortParams.value.sortBy === 'decreasing'
    ? (sortParams.value.sortBy = 'increasing')
    : (sortParams.value.sortBy = 'decreasing')
}
</script>
