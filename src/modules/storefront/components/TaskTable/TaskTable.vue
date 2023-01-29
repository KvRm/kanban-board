<template>
  <section>
    <BaseTable :categories="Object.values(TaskTableCategoriesEnum)">
      <TransitionGroup name="list" appear>
        <BaseTableRow
          v-for="task in tasks"
          :key="task.id.id + task.board.id + task.id.prefix"
        >
          <BaseTableItem
            v-for="property in task"
            :key="task.id.id + task.board.id + task.id.prefix"
          >
            <BaseLink v-if="isLinkType(property)" class="link" :link="property" />
            <span v-else-if="isTagType(property[0])" class="tags-container">
              <ElTag
                v-for="item in (property as unknown as Tag)"
                :key="item.label"
                :type="item.type"
                effect="dark"
                class="tag"
                disable-transitions
              >
                {{ item.label }}
              </ElTag>
            </span>
            <p v-else>{{ property }}</p>
          </BaseTableItem>
        </BaseTableRow>
      </TransitionGroup>
    </BaseTable>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import BaseTable from '../../../../components/table/BaseTable.vue'
  import BaseTableRow from '../../../../components/table/BaseTableRow.vue'
  import BaseTableItem from '../../../../components/table/BaseTableItem.vue'
  import { TaskCriticalLvlEnum } from '../../../../models/Task'
  import { MyTask, TaskTableCategoriesEnum } from '../../components/TaskTable'
  import { isLinkType, isTagType } from '../../../../lib/useTypeChecker'
  import { Tag } from '../../../../typings/tag'

  /**
   * Элементы должны быть размещены только в такой последовательности
   */
  const tasks = ref<MyTask[]>([
    {
      id: {
        id: '2212121',
        title: '2212121',
        prefix: 'SD',
        board: {
          id: 'sozgksof-32dasd-gdfs',
        },
        type: 'task',
      },
      title: 'MyTask',
      board: {
        id: '2112121',
        title: 'BoardTitle',
        type: 'board',
      },
      statusSection: 'В работе',
      tags: [
        {
          label: 'SomeTag',
          type: '',
        },
        {
          label: 'SomeTag',
          type: 'danger',
        },
        {
          label: 'SomeTag',
          type: 'info',
        },
        {
          label: 'SomeTag',
          type: 'success',
        },
        {
          label: 'SomeTag',
          type: 'warning',
        },
      ],
      criticalLvl: TaskCriticalLvlEnum.High,
      completeDate: '22.11.2023',
      author: {
        id: '212121',
        title: 'SomeName',
        type: 'user',
      },
    },
    {
      id: {
        id: '2212121',
        title: '2212121',
        prefix: 'SD',
        board: {
          id: 'sozgksof-32dasd-gdfs',
        },
        type: 'task',
      },
      title: 'MyTask',
      board: {
        id: '2112121',
        title: 'BoardTitle',
        type: 'board',
      },
      statusSection: 'В работе',
      tags: [
        {
          label: 'SomeTag',
          type: '',
        },
      ],
      criticalLvl: TaskCriticalLvlEnum.High,
      completeDate: '22.11.2023',
      author: {
        id: '212121',
        title: 'SomeName',
        type: 'user',
      },
    },
    {
      id: {
        id: '2212121',
        title: '2212121',
        prefix: 'SD',
        board: {
          id: 'sozgksof-32dasd-gdfs',
        },
        type: 'task',
      },
      title: 'MyTask',
      board: {
        id: '2112121',
        title: 'BoardTitle',
        type: 'board',
      },
      statusSection: 'В работе',
      tags: [
        {
          label: 'SomeTag',
          type: '',
        },
      ],
      criticalLvl: TaskCriticalLvlEnum.High,
      completeDate: '22.11.2023',
      author: {
        id: '212121',
        title: 'SomeName',
        type: 'user',
      },
    },
  ])
</script>

<style scoped lang="scss">
  .tags-container {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    flex-flow: row wrap;
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
    transform: translateX(-30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
