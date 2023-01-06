<template>
  <tr class="max-md:block">
    <td
      class="text-center max-md:text-right max-md:block before:content-[attr(data-label)]"
      v-for="item in taskItems"
      :key="item.title"
      :data-label="item.category"
    >
      <router-link v-if="item.id" :to="item.id">{{ item.title }}</router-link>
      <p v-else>{{ item.title }}</p>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MyTask } from './my-task.type'
import {
  TableCategories,
  TableCategoriesLinks,
  TableTaskItem,
} from './table-task-item.type'

const props = defineProps<{
  task: MyTask
}>()

const taskItems = ref<TableTaskItem[]>([
  {
    category: TableCategories['Идентификатор задачи'],
    title: props.task.id,
    id: `${TableCategoriesLinks['Идентификатор задачи']}/${props.task.id}`,
  },
  {
    category: TableCategories['Название задачи'],
    title: props.task.title,
  },
  {
    category: TableCategories['Доска'],
    title: props.task.board.title,
    id: `${TableCategoriesLinks['Доска']}/${props.task.board.id}`,
  },
  {
    category: TableCategories['Статус'],
    title: props.task.board.statusSection,
  },
  {
    category: TableCategories['Критичность'],
    title: props.task.criticalLvl,
  },
  {
    category: TableCategories['Идентификатор задачи'],
    title: props.task.completeDate,
  },
  {
    category: TableCategories['Автор'],
    title: props.task.author.name,
    id: `${TableCategoriesLinks['Автор']}/${props.task.author.id}`,
  },
])
</script>
