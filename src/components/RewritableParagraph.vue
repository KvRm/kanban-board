<template>
  <p v-if="!editing">
    {{ input }}
  </p>
  <el-input v-else v-model="input" :placeholder="placeholder">
    <template #append>
      <el-button @click="save">
        <FontAwesomeIcon icon="fa-solid fa-check" />
      </el-button>
    </template>
  </el-input>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps<{
    modelValue: string
    editing: boolean
    placeholder: string
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const input = ref<string>(props.modelValue)

  function save() {
    emit('update:modelValue', input.value)
  }
</script>
