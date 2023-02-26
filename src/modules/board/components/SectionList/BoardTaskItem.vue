<template>
  <div class="task" :draggable="draggable" @dragstart="onDragStart($event)">
    <div class="task-content">
      <div class="main-info">
        <span class="task-critical-icon">
          <FontAwesomeIcon icon="fa-solid fa-circle-up" />
        </span>
        <BaseLink class="task-link" :link="taskLink" />
      </div>
      <div class="tags-container">
        <ElTag
          v-for="item in task.tags"
          :key="item.label"
          :type="item.type"
          effect="dark"
          class="tag"
          disable-transitions
        >
          {{ item.label }}
        </ElTag>
      </div>
    </div>
    <div
      class="task-drag-hand"
      @mouseenter="draggable = true"
      @mouseleave="draggable = false"
    ></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/reactivity'
  import { ref } from 'vue'
  import BaseLink from '../../../../components/Link/BaseLink.vue'
  import { TaskLink } from '../../../../components/Link/types'
  import { StatusSectionTask } from '../../../../models/StatusSection'

  const props = defineProps<{
    task: StatusSectionTask
    boardId: string
  }>()

  const taskLink = computed<TaskLink>(() => ({
    id: props.task.id,
    board: {
      id: props.boardId,
    },
    prefix: props.task.prefix,
    title: props.task.title,
    type: 'task',
  }))

  const draggable = ref<boolean>(false)

  function onDragStart(e: DragEvent) {
    e.dataTransfer!.dropEffect = 'move'
    e.dataTransfer!.effectAllowed = 'move'
    e.dataTransfer!.setData('taskId', props.task.id)
  }
</script>

<style scoped lang="scss">
  .task {
    display: flex;
    justify-content: space-between;
    background: var(--el-color-info-light-9);
    box-shadow: var(--el-box-shadow-lighter);
    border-radius: 0.5rem;
    overflow: hidden;
    &:hover {
      .task-drag-hand {
        width: 1rem;
      }
    }
    .task-content {
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      .main-info {
        display: flex;
        .task-link:hover {
          text-decoration: underline;
          color: var(--el-color-primary);
        }
      }
      .tags-container {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .task-critical-icon {
      align-self: center;
      width: max-content;
      height: 100%;
      margin-right: 0.5rem;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .task-link {
      display: flex;
      align-items: center;
    }
    .task-drag-hand {
      display: flex;
      width: 0;
      background-color: var(--el-color-primary);
      cursor: grab;
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
</style>
