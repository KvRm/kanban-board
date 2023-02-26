<template>
  <BaseSortableTable :categories="TASK_TABLE_CATEGORIES" @sort="sort">
    <BaseSortableTableRow v-for="task in collectedMyTasks" :key="JSON.stringify(task)">
      <BaseSortableTableItem v-for="property in task" :key="JSON.stringify(task)">
        <BaseLink v-if="isLinkType(property)" class="link" :link="property" />
        <span
          v-else-if="property?.length && isTagType(property[0])"
          class="tags-container"
        >
          <ElTag
            v-for="item in (property as TaskTag[])"
            :key="item.label"
            :type="item.type"
            effect="dark"
            class="tag"
            disable-transitions
          >
            {{ item.label }}
          </ElTag>
        </span>
        <span v-else-if="existsInTaskCriticalLvlEnum(property as string)">
          {{ t(property as string) }}
        </span>
        <span v-else-if="typeof property === 'string'">{{ property }}</span>
      </BaseSortableTableItem>
    </BaseSortableTableRow>
  </BaseSortableTable>
</template>

<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import BaseSortableTable from '../../../components/SortableTable/BaseSortableTable.vue'
  import BaseSortableTableRow from '../../../components/SortableTable/BaseSortableTableRow.vue'
  import BaseSortableTableItem from '../../../components/SortableTable/BaseSortableTableItem.vue'
  import BaseLink from '../../../components/Link/BaseLink.vue'
  import { Task, TaskCriticalLvlEnum, TaskTag } from '../../../models/Task'
  import { useTypeChecker } from '../../../lib/useTypeChecker'
  import { MyTask, TaskTableCategoriesEnum } from '../types'
  import { TASK_TABLE_CATEGORIES } from '../data'
  import { useTaskTableSort } from '../composables/useTaskTableSort'
  import { useI18n } from 'vue-i18n'
  import { useMyTasksStore } from '../stores/myTasksStore'
  import { SortTypeEnum } from '../../../components/SortableTable/types'

  const { t } = useI18n()
  const { isLinkType, isTagType } = useTypeChecker()
  const myTasksStore = useMyTasksStore()

  const myTasks = computed<Task[]>(() => myTasksStore.myTasks)
  const collectedMyTasks = computed<MyTask[]>(() => myTasksStore.collectedMyTasks)

  const sort = useTaskTableSort(collectedMyTasks)

  onMounted(async () => {
    await myTasksStore.loadMyTasks()
    sort({
      category: TaskTableCategoriesEnum.CreateDate,
      order: 'increasing',
      type: SortTypeEnum.Date,
    })
  })

  function existsInTaskCriticalLvlEnum(value: string): boolean {
    return Object.values(TaskCriticalLvlEnum).includes(value as TaskCriticalLvlEnum)
  }
</script>

<style scoped lang="scss">
  .tags-container {
    display: flex;
    justify-content: flex-start;
    gap: 0.25rem;
    flex-flow: row nowrap;
    overflow-x: auto;

    &:hover {
      &::-webkit-scrollbar-thumb {
        display: block;
      }
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      display: none;
      background-color: var(--el-color-info-light-3);
      border-radius: 0.5rem;
    }
  }
  .link {
    &:hover {
      text-decoration: underline;
      color: var(--el-color-primary);
    }
  }
</style>
