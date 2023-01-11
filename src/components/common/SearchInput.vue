<template>
  <div class="search">
    <div class="relative rounded-btn shadow-sm inline-block">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        class="absolute top-3 left-2 text-secondary"
      />
      <input
        id="price"
        v-model.lazy="input"
        type="text"
        name="price"
        class="block w-80 rounded-btn border-color-primary focus:outline-0 pl-8"
        placeholder="Введите id или название задачи"
        @input="$emit('search', input)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    searchResource: any
  }>()

  defineEmits<{
    (e: 'search', value: 'string'): void
  }>()

  const input = ref<string>('')
</script>
