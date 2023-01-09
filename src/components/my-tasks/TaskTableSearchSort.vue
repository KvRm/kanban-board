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
import { computed, reactive } from 'vue'
import { SortParams } from '../../types/common'
import { TaskTableCategoriesEnum } from '../../types/task'
import DropdownInput from '../common/DropdownInput.vue'
import SearchInput from '../common/SearchInput.vue'

const emit = defineEmits<{
  (e: 'selectSortParams', sortParams: SortParams): void
  (e: 'search', text: string): void
}>()

const sortParams = reactive<SortParams>({
  category: '',
  sortBy: 'increasing',
})

const sortTypeIconName = computed<'up' | 'down'>(() =>
  sortParams.sortBy === 'decreasing' ? 'down' : 'up',
)

const dropdownItems = [
  TaskTableCategoriesEnum.Id,
  TaskTableCategoriesEnum.TaskName,
  TaskTableCategoriesEnum.Board,
  TaskTableCategoriesEnum.StatusSection,
  TaskTableCategoriesEnum.CriticalLvl,
  TaskTableCategoriesEnum.CompleteDate,
  TaskTableCategoriesEnum.Author,
]

function selectSortCategory(value: string) {
  sortParams.category = value
}

function toggleSortType() {
  sortParams.sortBy === 'decreasing'
    ? (sortParams.sortBy = 'increasing')
    : (sortParams.sortBy = 'decreasing')
}
</script>
