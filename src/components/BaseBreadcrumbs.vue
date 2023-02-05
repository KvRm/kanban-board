<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="breadcrumb in breadcrumbs">
      {{ breadcrumb }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  defineProps<{
    breadcrumbs: string[]
  }>()
</script>

<style scoped lang="scss">
  .breadcrumb-link {
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
</style>
