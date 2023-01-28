<template>
  <div class="search">
    <div class="relative rounded-btn shadow-sm inline-block">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        class="absolute top-3 left-2 text-secondary"
      />
      <input
        id="price"
        v-model="input"
        type="text"
        name="price"
        class="input block w-80 rounded-btn border-color-soft focus:outline-0 pl-8"
        :placeholder="placeholder"
        @input="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useDebouncer } from '../lib/useDebouncer'

  defineProps<{
    searchResource: any[]
    placeholder: string
  }>()

  const emit = defineEmits<{
    (e: 'search', value: string): void
  }>()

  const input = ref<string>('')

  const search = useDebouncer(() => {
    input.value = input.value.trim()
    emit('search', input.value)
  }, 1000)
</script>

<style scoped>
  .input {
    background: none;
  }
</style>
