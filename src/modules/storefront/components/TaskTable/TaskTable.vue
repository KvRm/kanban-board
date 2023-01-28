<template>
  <section>
    <BaseTable :categories="Object.values(TaskTableCategoriesEnum)">
      <BaseTableRow
        v-for="task in tasks"
        :key="task.id.id + task.board.id + task.id.prefix"
      >
        <BaseTableItem
          v-for="property in task"
          :key="task.id.id + task.board.id + task.id.prefix"
        >
          <BaseLink v-if="isLinkType(property)" class="link" :link="property" />
          <p v-else>{{ property }}</p>
        </BaseTableItem>
      </BaseTableRow>
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
  import { isLinkType } from '../../../../lib/isLinkType'

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
      // TODO: добавить теги
      tags: 'tags',
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
  .link {
    &:hover {
      text-decoration: underline;
      color: var(--el-color-primary);
    }
  }
</style>
