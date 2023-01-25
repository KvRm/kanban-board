<template>
  <p v-if="!writing" class="rewritable py-0.5">
    {{ text }}
  </p>
  <div v-else class="input max-w-min relative">
    <input
      type="text"
      placeholder="Введите текст"
      class="inline-block rounded-btn box-border w-48 px-2 py-0.5"
      v-model="input"
    />
    <button class="absolute -right-5 top-0.5" @click="save">
      <FontAwesomeIcon icon="fa-solid fa-check" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps<{
    text: string
    writing: boolean
  }>()

  const emit = defineEmits<{
    (e: 'on-rewrite', value: string): void
  }>()

  const input = ref<string>('')

  function save() {
    emit('on-rewrite', input.value)
  }
</script>
