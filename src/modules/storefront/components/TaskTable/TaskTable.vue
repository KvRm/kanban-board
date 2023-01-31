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
  import {
    MyTask,
    TaskTableCategoriesEnum,
    TASK_TABLE_CATEGORIES,
  } from '../../components/TaskTable'
  import { isLinkType, isTagType } from '../../../../lib/useTypeChecker'
  import { Tag } from '../../../../typings/tag'
  import { useTaskTableSort } from '../../composables/taskTableSort'
  import { SortParams } from '../../../../components/Table'
  import { useCompareByType } from '../../../../lib/useCompare'

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
      completeDate: '23-11-2023',
      author: {
        id: '212121',
        title: 'SomeName',
        type: 'user',
      },
    },
  ])

  function sort(sortParams: SortParams) {
    switch (sortParams.category) {
      case TaskTableCategoriesEnum.Id: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.id.title, b.id.title)
        })
        break
      }
      case TaskTableCategoriesEnum.Title: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.title, b.title)
        })
        break
      }
      case TaskTableCategoriesEnum.Board: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.board.title, b.board.title)
        })
        break
      }
      case TaskTableCategoriesEnum.StatusSection: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.statusSection, b.statusSection)
        })
        break
      }
      case TaskTableCategoriesEnum.CriticalLvl: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.criticalLvl, b.criticalLvl)
        })
        break
      }
      case TaskTableCategoriesEnum.CompleteDate: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.completeDate, b.completeDate)
        })
        break
      }
      case TaskTableCategoriesEnum.Author: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.author.title, b.author.title)
        })
        break
      }
    }
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
    transform: translateY(-30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
