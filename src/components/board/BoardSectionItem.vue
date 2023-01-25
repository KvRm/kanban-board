<template>
  <section class="board-section flex flex-col gap-3 h-full mb-3">
    <!-- Header -->
    <div
      class="section-header flex gap-2 justify-between items-center w-72 py-3 px-0.5 relative font-bold box-border"
    >
      <span
        class="title inline-block after:bottom-0 after:left-0 after:w-full after:absolute after:h-1 after:bg-secondary after:rounded-btn"
      >
        <RewritableParagraph
          :text="capitalizedTitle"
          :writing="taskTitleRewriting"
          @on-rewrite="rewriteTitle"
        />
      </span>

      <div class="flex gap-2 items-center">
        <span class="border border-color-soft px-3 rounded-btn">
          {{ tasksCount }}
        </span>
        <div class="settings float-right relative">
          <button class="settings-btn">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
          </button>
          <ul
            class="settings-dropdown absolute -right-1 w-max bg-primary-soft border border-color-soft rounded-btn z-20 text-sm hidden"
          >
            <li
              class="px-2 py-1 border-b border-color-soft cursor-pointer hover:bg-grey"
              @click="taskTitleRewriting = true"
            >
              <FontAwesomeIcon icon="fa-solid fa-pen" />
              <span class="pl-2">Изменить название</span>
            </li>
            <li class="px-2 py-1 text-red cursor-pointer hover:bg-grey">
              <FontAwesomeIcon icon="fa-solid fa-trash" />
              <span class="pl-2">Удалить</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- List -->
    <BoardTaskItem v-for="task in section.tasks" :task="task" />

    <!-- AddBtn -->
    <button
      class="border bg-primary-soft hover:bg-secondary hover:border-color-primary transition-all border-color-soft px-3 py-1 rounded-btn flex self-center w-max"
    >
      Добавить
    </button>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { BoardStatusSection } from '../../types/board'
  import RewritableParagraph from '../common/RewritableParagraph.vue'
  import BoardTaskItem from './BoardTaskItem.vue'

  const props = defineProps<{
    section: BoardStatusSection
  }>()

  const tasksCount = computed<number>(() => props.section.tasks.length)
  const title = ref<string>(props.section.title)
  const capitalizedTitle = computed<string>(() => title.value.toUpperCase())
  const taskTitleRewriting = ref<boolean>(false)

  function rewriteTitle(value: string) {
    title.value = value
    taskTitleRewriting.value = false
  }
</script>

<style scoped>
  .settings-btn:hover + .settings-dropdown,
  .settings-dropdown:hover {
    display: block;
  }
</style>
