<template>
  <div class="comment">
    <div class="avatar"></div>
    <div>
      <p class="author">Автор</p>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in culpa
        voluptatibus a reiciendis vel provident, perferendis eos maxime ipsa?
        <div class="actions">
          <span class="answer">Ответить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .comment {
    display: flex;
    gap: 0.5rem;
    .avatar {
      min-width: 2rem;
      height: 2rem;
      background: black;
      border-radius: 50%;
    }
    .author {
      font-weight: bold;
    }
    .container {
      background: var(--el-color-info-light-9);
      border: 1px solid var(--el-color-info-light-5);
      border-radius: 0.5rem;
      padding: 0.5rem;
      .answer {
        color: var(--el-text-color-secondary);
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
