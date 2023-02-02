<template>
  <component :is="layout" class="wrapper">
    <Transition name="item" appear>
      <router-view />
    </Transition>
  </component>
  <ToastsContainer />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import ToastsContainer from './components/ToastsContainer.vue'
  import { LayoutType } from './layout/layout.type'

  const route = useRoute()

  const layout = computed<LayoutType>(() => route.meta.layout || 'DefaultLayout')
</script>

<style scoped lang="scss">
  .wrapper {
    background: var(--el-color-info-light-8);
    transition: color 0.3s, background 0.3s;
  }

  .item-move,
  .item-enter-active,
  .item-leave-active {
    transition: all 0.5s ease;
  }
  .item-enter-from,
  .item-leave-to {
    opacity: 0;
    transform: translateY(-500px);
  }
  .item-leave-active {
    position: absolute;
  }
</style>
