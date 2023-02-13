<template>
  <BaseTable :categories="TASK_TABLE_CATEGORIES" @sort="sort">
    <TransitionGroup name="list" appear>
      <BaseTableRow
        v-for="task in collectedMyTasks"
        :key="task.id.id + task.board.id + task.id.prefix"
        class="line"
        ref="row"
      >
        <BaseTableItem
          v-for="property in task"
          :key="task.id.id + task.board.id + task.id.prefix"
        >
          <BaseLink v-if="isLinkType(property)" class="link" :link="property" />
          <span v-else-if="isTagType(property[0])" class="tags-container">
            <ElTag
              v-for="item in (property as unknown as Tag)"
              :key="item.labes"
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
          <span v-else>{{ property as string }}</span>
        </BaseTableItem>
      </BaseTableRow>
    </TransitionGroup>
  </BaseTable>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue'
  import BaseTable from '../../../../components/table/BaseTable.vue'
  import BaseTableRow from '../../../../components/table/BaseTableRow.vue'
  import BaseTableItem from '../../../../components/table/BaseTableItem.vue'
  import BaseLink from '../../../../components/Link/BaseLink.vue'
  import { Task, TaskCriticalLvlEnum } from '../../../../models/Task'
  import { useTypeChecker } from '../../../../lib/useTypeChecker'
  import { Tag } from '../../../../typings/tag'
  import { MyTask, TaskTableCategoriesEnum } from './types'
  import { TASK_TABLE_CATEGORIES } from './data'
  import { useTaskTableSort } from '../../composables/useTaskTableSort'
  import { SortTypeEnum } from '../../../../components/Table'
  import { useI18n } from 'vue-i18n'
  import { useMyTasksStore } from '../../../../stores/myTasksStore'
  import { useTypeConverter } from '../../../../composables/useTypeConverter'

  const { t } = useI18n()
  const { isLinkType, isTagType } = useTypeChecker()
  const myTasksStore = useMyTasksStore()
  const { covertTaskToMyTask } = useTypeConverter()

  const myTasks = computed<Task[]>(() => myTasksStore.myTasks)
  const collectedMyTasks = computed<MyTask[]>(() =>
    myTasks.value ? myTasks.value.map<MyTask>((task) => covertTaskToMyTask(task)) : []
  )

  const sort = useTaskTableSort(collectedMyTasks)

  onMounted(async () => {
    await myTasksStore.getMyTasks()
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

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
  }
  .list-leave-active {
    position: absolute;
  }
</style>
