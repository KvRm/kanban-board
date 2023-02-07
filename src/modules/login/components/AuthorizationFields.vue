<template>
  <div class="form-main">
    <input type="text" class="input-field" placeholder="Email" />
    <input type="password" class="input-field password" placeholder="Password" />
    <span class="form-link forgot-pasword">Forgot password?</span>
    <router-link :to="{ path: route.path, query: { t: 'register' } }" class="form-link">
      Don't have an account?
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<style scoped lang="scss">
  .form-main {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    .input-field {
      margin-bottom: 32px;
      height: 45px;
      background: #224957;
      border-radius: 10px;
      padding: 12px 18px;
      color: white;
      &::placeholder {
        color: white;
      }
    }
    .password {
      margin-bottom: 23px;
    }
    .form-link {
      line-height: 1.5rem;
      width: fit-content;
      justify-self: flex-start;
      color: var(--el-text-color-primary);
      cursor: pointer;
    }
  }

  .form-main {
    .form-link {
      color: #20df7f;
    }
    .forgot-pasword {
      margin-bottom: 10px;
    }
  }
</style>
