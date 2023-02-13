<template>
  <router-link :key="link.title" :to="route">
    {{ link.title }}
  </router-link>
</template>

<script setup lang="ts">
  import { Link, TaskLink } from '.'
  import { useBaseRoute } from '../../composables/useBaseRoute'

  const props = defineProps<{
    /**
     * Если передать тип ссылки task без prefix и board.id ссылка будет не корректна
     */
    link: Link | TaskLink
  }>()

  const routeHandler = useBaseRoute()

  const route = routeHandler(props.link)
</script>
