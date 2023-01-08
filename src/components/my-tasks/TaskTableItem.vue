<template>
  <tr
    class="border-color-soft lg:border-b lg:hover:bg-light-grey lg:last:border-none max-lg:block max-lg:border max-lg:rounded-btn mb-2 px-4 py-2"
  >
    <td
      class="text-center py-1 max-lg:border-b border-color-soft last:border-none max-lg:text-right max-lg:block max-lg:border-dashed max-lg:before:content-[attr(data-label)] before:float-left"
      v-for="item in taskTableItems"
      :key="item.category"
      :data-label="item.category"
    >
      <router-link
        v-if="item.params.type === TaskTableItemType.link"
        :to="item.params.prefix + item.params.id"
        class="hover:text-blue"
      >
        {{ item.params.title }}
      </router-link>
      <p v-else>{{ item.params.title }}</p>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  TaskTableItemType,
  MyTask,
  TaskTableCategoriesEnum,
  TaskTableCategoriesLinkPrefixEnum,
  TaskTableItem,
} from '../../types/task'

const props = defineProps<{
  task: MyTask
}>()

const taskTableItems = ref<TaskTableItem[]>([
  {
    category: TaskTableCategoriesEnum['Идентификатор задачи'],
    params: {
      type: TaskTableItemType.link,
      title: props.task.id,
      id: props.task.id,
      prefix: TaskTableCategoriesLinkPrefixEnum['Идентификатор задачи'],
    },
  },
  {
    category: TaskTableCategoriesEnum['Название задачи'],
    params: {
      type: TaskTableItemType.paragragh,
      title: props.task.title,
    },
  },
  {
    category: TaskTableCategoriesEnum['Доска'],
    params: {
      type: TaskTableItemType.link,
      title: props.task.board.title,
      id: props.task.board.id,
      prefix: TaskTableCategoriesLinkPrefixEnum['Доска'],
    },
  },
  {
    category: TaskTableCategoriesEnum['Статус'],
    params: {
      type: TaskTableItemType.paragragh,
      title: props.task.board.statusSection,
    },
  },
  {
    category: TaskTableCategoriesEnum['Критичность'],
    params: {
      type: TaskTableItemType.paragragh,
      title: props.task.criticalLvl,
    },
  },
  {
    category: TaskTableCategoriesEnum['Идентификатор задачи'],
    params: {
      type: TaskTableItemType.paragragh,
      title: props.task.completeDate,
    },
  },
  {
    category: TaskTableCategoriesEnum['Автор'],
    params: {
      type: TaskTableItemType.link,
      title: props.task.author.name,
      id: props.task.author.id,
      prefix: TaskTableCategoriesLinkPrefixEnum['Автор'],
    },
  },
])
</script>
