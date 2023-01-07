<template>
  <div class="flex w-full max-sm:flex-col-reverse">
    <section class="w-3/4 max-lg:w-2/3 max-sm:w-full">
      <p class="board-list-titile text-xl text-center pb-4 font-bold">Мои доски</p>
      <BoardLinkList />
      <p class="board-list-titile text-xl text-center pb-4 font-bold">Все доски</p>
      <BoardLinkList />
    </section>
    <aside class="w-1/4 max-lg:w-1/3 max-sm:w-full">
      <TasksHistory />
    </aside>
  </div>
</template>

<script setup lang="ts">
import BoardLinkList from '../components/Main/BoardLinkList.vue'
import TasksHistory from '../components/Main/TasksHistory.vue'
</script>
