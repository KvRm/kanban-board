<template>
  <div class="task">
    <div class="task-header">
      <h3 class="task-title">Task-title</h3>
      <div class="actions">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-button type="primary">Действия</el-button>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon class="el-icon--left">
                  <font-awesome-icon icon="fa-solid fa-up-long" />
                </el-icon>
                Перенести в текущий спринт
              </el-dropdown-item>
              <el-dropdown-item>
                <el-icon class="el-icon--left">
                  <font-awesome-icon icon="fa-solid fa-user" />
                </el-icon>
                Назначить нового исполнителя
              </el-dropdown-item>
              <el-dropdown-item divided>
                <el-icon class="el-icon--left">
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </el-icon>
                Удалить
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="task-body">
      <section class="task-content">
        <div class="task-content-item">
          <p class="label">Описание задачи</p>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rerum vel ab
            possimus impedit omnis qui eligendi vitae sint sequi!
          </p>
        </div>
        <div class="task-content-item">
          <p class="label">Файлы</p>
          <el-upload
            class="upload"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload">
              <font-awesome-icon icon="fa-solid fa-cloud-arrow-up" />
            </el-icon>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <template #tip>
              <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </template>
          </el-upload>
        </div>
        <div class="task-content-item">
          <p class="label">Комментарии</p>
          <TaskComments />
        </div>
      </section>
      <aside class="task-params">asas</aside>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TaskComments from './TaskComments.vue'
</script>

<style scoped lang="scss">
  .task {
    display: flex;
    flex-direction: column;
    .task-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--el-color-info);
      .task-title {
        font-size: 1.75rem;
        font-weight: 700;
      }
      .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }

    .task-body {
      display: flex;
      .task-content {
        display: flex;
        padding-right: 0.5rem;
        flex-direction: column;
        padding-top: 1rem;
        max-width: 720px;
        border-right: 1px solid var(--el-color-info);
        .task-content-item {
          margin-bottom: 2rem;
          .label {
            font-weight: 700;
            line-height: 1.5rem;
          }
        }
      }
      .task-params {
        display: flex;
        padding-top: 1rem;
        padding-left: 0.5rem;
        min-width: 280px;
      }
    }
  }
</style>
