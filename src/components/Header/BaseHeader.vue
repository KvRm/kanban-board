<template>
  <header class="header">
    <nav class="header-nav" ref="nav">
      <router-link class="header-nav__link" :to="mainRoute">
        {{ t('myBoards') }}
      </router-link>
      <router-link class="header-nav__link" :to="myTasksRoute">
        {{ t('myTasks') }}
      </router-link>
      <router-link class="header-nav__link" :to="myTasksRoute">
        Создать доску
      </router-link>
    </nav>
    <div class="header-setting">
      <BaseLocale />
      <BaseThemeSwitcher />
      <BaseHeaderUser />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { computed } from '@vue/reactivity'
  import { useI18n } from 'vue-i18n'
  import { useLocale } from '../../composables/useLocale'
  import BaseThemeSwitcher from '../Header/BaseThemeSwitcher.vue'
  import BaseLocale from './BaseLocale.vue'
  import BaseHeaderUser from './BaseHeaderUser.vue'

  const { t } = useI18n()
  const { localeRoute } = useLocale()

  const mainRoute = computed<string>(() => `${localeRoute.value}/`)
  const myTasksRoute = computed<string>(() => `${localeRoute.value}/my-tasks`)
  const loginRoute = computed<string>(() => `${localeRoute.value}/login`)
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    box-shadow: var(--el-box-shadow-light);
    position: fixed;
    z-index: 50;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0 0.5rem;
    color: var(--el-text-color-primary);
    background-color: var(--el-color-info-light-9);

    @media not all and (min-width: 640px) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    .header-nav {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      .header-nav__link {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        padding: 0 0.2rem;

        &:hover {
          background: var(--el-color-info-light-8);
        }
      }
    }
    .header-setting {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .router-link-active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--el-color-primary-dark-2);
    height: 0.3rem;
  }
</style>
