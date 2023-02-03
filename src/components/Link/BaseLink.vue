<template>
  <router-link :key="link.id" :to="route">
    {{ link.title }}
  </router-link>
</template>

<script setup lang="ts">
  import { computed } from '@vue/reactivity'
  import { Link, LinkRouteEnum, TaskLink } from '.'

  const props = defineProps<{
    /**
     * Если передать тип ссылки task без prefix и board.id ссылка будет не корректна
     */
    link: Link | TaskLink
  }>()

  const route = computed<string>(() => {
    if (props.link.type === 'task' && isTaskLink(props.link)) {
      return `${LinkRouteEnum.Board}${(props.link as TaskLink)?.board?.id}/${
        props.link.prefix
      }-${props.link.id}`
    }
    if (props.link.type === 'board') {
      return LinkRouteEnum.Board + props.link.id
    }
    if (props.link.type === 'user') {
      return LinkRouteEnum.User + props.link.id
    }
    return ''
  })

  const isTaskLink = (value: Link | TaskLink): value is TaskLink =>
    !!((value as TaskLink)?.prefix && (value as TaskLink)?.board?.id)
</script>
