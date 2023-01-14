<template>
  <div class="task flex flex-col bg-primary-soft shadow-lg rounded-btn">
    <div class="task-content flex p-2">
      <span class="h-full w-max text-2xl mr-2 self-center">
        <FontAwesomeIcon icon="fa-solid fa-circle-up" />
      </span>
      <div class="content flex items-center">{{ task.title }}</div>
    </div>
    <div
      class="task-footer flex h-3 bg-secondary rounded-b-btn cursor-grab justify-center"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { StatusSectionTaskLink } from '../../types/common'

  defineProps<{
    task: StatusSectionTaskLink
  }>()
</script>
