<template>
  <router-link :key="link.id" :to="route">
    {{ link.title }}
  </router-link>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Link, LinkRouteEnum, TaskLink } from '.'
  import { useLocale } from '../../composables/useLocale'
  import { useTypeChecker } from '../../lib/useTypeChecker'

  const props = defineProps<{
    /**
     * Если передать тип ссылки task без prefix и board.id ссылка будет не корректна
     */
    link: Link | TaskLink
  }>()

  const { isTaskLink } = useTypeChecker()
  const { localeRoute } = useLocale()

  const route = computed<string>(() => {
    if (props.link.type === 'task' && isTaskLink(props.link)) {
      return `${localeRoute.value}/${LinkRouteEnum.Board}${
        (props.link as TaskLink)?.board?.id
      }/${props.link.prefix}-${props.link.id}`
    }
    if (props.link.type === 'board') {
      return `${localeRoute.value}/${LinkRouteEnum.Board + props.link.id}`
    }
    if (props.link.type === 'user') {
      return `${localeRoute.value}/${LinkRouteEnum.User + props.link.id}`
    }
    return ''
  })
</script>
