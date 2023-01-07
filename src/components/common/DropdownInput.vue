<template>
  <div class="dropdown inline-block relative transition-all">
    <button
      class="py-2 px-4 rounded-btn inline-flex items-center bg-secondary text-white h-full"
      @click="toggleSelect"
    >
      <span class="mr-1">{{ currentValue || placeholderText }}</span>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" class="text-white h-3" />
    </button>
    <ul
      ref="select"
      class="dropdown-menu absolute hidden w-full pt-1 min-w-fit box-border"
    >
      <li
        class="border-x border-b first:border-t border-color-primary bg-primary-soft first:rounded-t-btn last:rounded-b-btn"
        v-for="item in items"
        :key="item"
        @click="dropdownHandler"
      >
        <span
          class="first rounded-btn hover:bg-light-grey py-2 px-4 block cursor-pointer"
        >
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  dropdownKey: string
  placeholderText: string
  items: string[]
}>()

const emit = defineEmits<{
  (e: 'dropdownSelect', value: string): void
}>()

const currentValue = ref<string>('')
const select = ref<Element | null>(null)

function dropdownHandler(e: Event) {
  if (e.target instanceof Element && e.target.textContent) {
    const item: string = e.target.textContent

    emit('dropdownSelect', item)
    currentValue.value = item
    toggleSelect()
  }
}

function toggleSelect() {
  if (select.value instanceof Element) {
    select.value.classList.toggle('hidden')
  }
}
</script>
