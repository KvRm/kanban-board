<template>
  <div class="search">
    <div class="relative rounded-btn shadow-sm inline-block">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        class="absolute top-3 left-2 text-secondary"
      />
      <input
        type="text"
        name="price"
        id="price"
        class="block w-80 rounded-btn border-color-primary focus:outline-0 pl-8"
        placeholder="Введите id или название задачи"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  searchResource: any
}>()
</script>
