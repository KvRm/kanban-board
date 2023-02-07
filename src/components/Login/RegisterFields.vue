<template>
  <div class="form-main">
    <input
      type="text"
      class="input-field"
      placeholder="Username"
      v-model="username"
      @input="updateUsername"
    />
    <input
      type="text"
      autocomplete="email"
      class="input-field"
      placeholder="Email"
      v-model="registerData.email"
      @input="changeRegisterFields"
    />
    <input
      type="password"
      autocomplete="new-password"
      class="input-field"
      placeholder="Password"
      v-model="registerData.password"
      @input="changeRegisterFields"
    />
    <input
      type="password"
      autocomplete="current-password"
      class="input-field repeat-password"
      placeholder="Repeat password"
      v-model="registerData.passwordRepeat"
      @input="changeRegisterFields"
    />
    <router-link :to="{ path: route.path }" class="form-link">
      Already have an account?
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { AuthRequest } from '../../services/firebase/types'

  interface RegisterData extends AuthRequest {
    passwordRepeat: string
  }

  const emit = defineEmits<{
    (e: 'registerFieldsChanged', value: AuthRequest): void
    (e: 'userNameChanged', value: string): void
  }>()

  const route = useRoute()

  const registerData = reactive<RegisterData>({
    email: '',
    password: '',
    passwordRepeat: '',
  })

  const username = ref<string>('')

  onMounted(() => {
    changeRegisterFields()
  })

  function changeRegisterFields() {
    const email = registerData.email
    const password =
      registerData.password === registerData.passwordRepeat ? registerData.password : ''

    emit('registerFieldsChanged', { email, password })
  }

  function updateUsername() {
    emit('userNameChanged', username.value)
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
    .repeat-password {
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
      color: #20df7f;
    }
  }
</style>
