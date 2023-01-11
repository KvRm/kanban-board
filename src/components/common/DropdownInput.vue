<template>
  <div class="dropdown inline-block relative transition-all">
    <button
      :key="dropdownKey"
      class="py-2 px-4 rounded-btn flex items-center hover:bg-secondary h-full justify-center transition"
      :class="`w-${width}`"
      @click="toggleSelect"
    >
      <span class="mr-1">{{ currentValue || placeholderText }}</span>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" class="h-3" />
    </button>
    <ul
      ref="select"
      class="dropdown-menu absolute hidden w-full pt-1 min-w-fit box-border"
    >
      <li
        v-for="item in items"
        :key="item"
        class="border-x border-b first:border-t border-color-soft bg-primary-soft first:rounded-t-btn last:rounded-b-btn"
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
    width: 24 | 32 | 44 | 52 | 60 | 64
  }>()

  const emit = defineEmits<{
    (e: 'dropdownSelect', value: string): void
  }>()

  const currentValue = ref<string>('')
  const select = ref<HTMLElement | null>(null)

  function dropdownHandler(e: Event) {
    if (e.target instanceof Element && e.target.textContent) {
      const item: string = e.target.textContent

      emit('dropdownSelect', item)
      currentValue.value = item
      toggleSelect()
    }
  }

  function toggleSelect() {
    if (select.value instanceof HTMLElement) {
      select.value.classList.toggle('hidden')

      if (!select.value.classList.contains('hidden')) {
        const windowWidth = window.innerWidth
        const selectRightPosition = select.value?.getBoundingClientRect().right

        const difference = windowWidth - selectRightPosition

        difference < 40
          ? select.value.classList.add('-translate-x-10')
          : select.value.classList.remove('-translate-x-10')
      }
    }
  }
</script>
