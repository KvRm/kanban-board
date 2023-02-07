<template>
  <div class="form-main">
    <input
      type="text"
      autocomplete="email"
      class="input-field"
      placeholder="Email"
      v-model="authData.email"
      @input="changeAuthFields"
    />
    <input
      type="password"
      autocomplete="current-password"
      class="input-field password"
      placeholder="Password"
      v-model="authData.password"
      @input="changeAuthFields"
    />
    <span class="form-link forgot-pasword">Forgot password?</span>
    <router-link :to="{ path: route.path, query: { t: 'register' } }" class="form-link">
      Don't have an account?
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import { AuthRequest } from '../../services/firebase/types'

  const route = useRoute()

  const emit = defineEmits<{
    (e: 'authFieldsChanged', value: AuthRequest): void
  }>()

  const authData = reactive<AuthRequest>({
    email: '',
    password: '',
  })

  onMounted(() => {
    changeAuthFields()
  })

  function changeAuthFields() {
    const email = authData.email
    const password = authData.password

    emit('authFieldsChanged', { email, password })
  }
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
    .forgot-pasword {
      margin-bottom: 10px;
    }
  }

  .form-main-dark {
    .form-link {
      color: #20df7f;
    }
  }
</style>
