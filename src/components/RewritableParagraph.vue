<template>
  <p v-if="!editing" class="rewritable-paragraph">
    {{ modelValue }}
  </p>
  <ElInput v-else class="rewritable-input" v-model="input" placeholder="Введите текст">
    <template #suffix>
      <FontAwesomeIcon icon="fa-solid fa-check" @click="save" />
    </template>
  </ElInput>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    modelValue: string
    editing: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const input = ref<string>('')

  function save() {
    emit('update:modelValue', input.value)
  }
</script>
