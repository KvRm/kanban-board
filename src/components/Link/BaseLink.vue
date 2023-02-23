<template>
  <router-link :key="link.title" :to="route">
    {{ link.title }}
  </router-link>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useLocale } from '../../modules/LocaleSwitcher/composables/useLocale'
  import { useTypeChecker } from '../../lib/useTypeChecker'
  import { Link, LinkRouteEnum, TaskLink } from './types'

  const props = defineProps<{
    /**
     * Если передать тип ссылки task без prefix и board.id ссылка будет не корректна
     */
    link: Link | TaskLink
  }>()

  const { localeRoute } = useLocale()
  const { isTaskLink } = useTypeChecker()

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
