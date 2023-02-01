<template>
  <section>
    <BaseTable :categories="TASK_TABLE_CATEGORIES" @sort="sort">
      <TransitionGroup name="list" appear>
        <BaseTableRow
          v-for="task in tasks"
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
                :key="item.label"
                :type="item.type"
                effect="dark"
                class="tag"
                disable-transitions
              >
                {{ item.label }}
              </ElTag>
            </span>
            <span v-else>{{ property }}</span>
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
  import BaseLink from '../../../../components/Link/BaseLink.vue'
  import { TaskCriticalLvlEnum } from '../../../../models/Task'
  import { isLinkType, isTagType } from '../../../../lib/useTypeChecker'
  import { Tag } from '../../../../typings/tag'
  import { useTaskTableSort } from '../../composables/taskTableSort'
  import { TASK_TABLE_CATEGORIES } from './data'
  import { MyTask } from './types'

  /**
   * Элементы должны быть размещены только в такой последовательности, id.title === id.id
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
      title: '1MyTask',
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
      criticalLvl: TaskCriticalLvlEnum.Medium,
      createDate: '11-12-2022',
      completeDate: '22-11-2023',
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
      title: '2MyTask',
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
      criticalLvl: TaskCriticalLvlEnum.VeryHigh,
      createDate: '16-12-2022',
      completeDate: '26-11-2023',
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
      title: '3MyTask',
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
      createDate: '11-12-2022',
      completeDate: '23-11-2023',
      author: {
        id: '212121',
        title: 'SomeName',
        type: 'user',
      },
    },
  ])

  const sort = useTaskTableSort(tasks)
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
    transform: translateY(-30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
