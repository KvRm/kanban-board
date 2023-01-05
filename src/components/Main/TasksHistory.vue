<template>
  <div
    class="flex flex-col w-full min-h-48 bg-primary-soft p-2 box-border shadow-lg rounded-card mb-8 overflow-hidden"
  >
    <span class="font-bold mb-2">Последние задачи:</span>
    <p class="mb-3 hover:text-blue"><router-link to="board/2">TaskLink 1</router-link></p>
    <p class="mb-3 hover:text-blue"><router-link to="board/2">TaskLink 2</router-link></p>
    <p class="mb-3 hover:text-blue"><router-link to="board/2">TaskLink 3</router-link></p>
    <p class="mb-3 hover:text-blue"><router-link to="board/2">TaskLink 4</router-link></p>
    <p class="mb-3 hover:text-blue"><router-link to="board/2">TaskLink 5</router-link></p>
  </div>
</template>

<script setup lang="ts"></script>
