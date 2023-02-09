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
    <router-link
      class="form-link"
      :to="{ path: route.path, query: { a: 'restore-password' } }"
    >
      Forgot password?
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
    margin-bottom: 16px;
    .input-field {
      margin-bottom: 16px;
      height: 45px;
      background: #213d5b;
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

  .form-main-dark {
    .form-link {
      color: #409eff;
    }
  }
</style>
