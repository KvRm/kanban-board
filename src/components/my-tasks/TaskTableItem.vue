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
      <TheTaskLink
        v-if="
          item.params.type === TaskTableItemType.Link &&
          Object.keys(item.params.linkParams).includes('prefix') &&
          Object.keys(item.params.linkParams).includes('board')
        "
        :task-link="(item.params.linkParams as TaskLink)"
      />
      <router-link
        v-else-if="item.params.type === TaskTableItemType.Link"
        class="hover:text-blue"
        :to="item.params.linkParams.linkRoute + item.params.linkParams.id"
      >
        {{ item.params.linkParams.title }}
      </router-link>
      <p v-else>{{ item.params.title }}</p>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LinkRouteEnum } from '../../types/common'
import {
  MyTask,
  TaskLink,
  TaskTableCategoriesEnum,
  TaskTableItem,
  TaskTableItemType,
} from '../../types/task'
import TheTaskLink from '../common/TheTaskLink.vue'

const props = defineProps<{
  task: MyTask
}>()

const taskTableItems = ref<TaskTableItem[]>([
  {
    category: TaskTableCategoriesEnum.Id,
    params: {
      type: TaskTableItemType.Link,
      linkParams: {
        id: props.task.id,
        prefix: props.task.prefix,
        title: `${props.task.prefix}-${props.task.id}`,
        board: {
          id: props.task.board.id,
        },
      },
    },
  },
  {
    category: TaskTableCategoriesEnum.TaskName,
    params: {
      type: TaskTableItemType.Paragragh,
      title: props.task.title,
    },
  },
  {
    category: TaskTableCategoriesEnum.Board,
    params: {
      type: TaskTableItemType.Link,
      linkParams: {
        id: props.task.board.id,
        title: props.task.board.title,
        linkRoute: LinkRouteEnum.Board,
      },
    },
  },
  {
    category: TaskTableCategoriesEnum.StatusSection,
    params: {
      type: TaskTableItemType.Paragragh,
      title: props.task.board.statusSection,
    },
  },
  {
    category: TaskTableCategoriesEnum.CriticalLvl,
    params: {
      type: TaskTableItemType.Paragragh,
      title: props.task.criticalLvl,
    },
  },
  {
    category: TaskTableCategoriesEnum.CompleteDate,
    params: {
      type: TaskTableItemType.Paragragh,
      title: props.task.completeDate,
    },
  },
  {
    category: TaskTableCategoriesEnum.Author,
    params: {
      type: TaskTableItemType.Link,
      linkParams: {
        title: props.task.author.name,
        id: props.task.author.id,
        linkRoute: LinkRouteEnum.User,
      },
    },
  },
])
</script>
