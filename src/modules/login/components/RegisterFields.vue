<template>
  <div class="form-main">
    <input
      type="text"
      class="input-field"
      placeholder="Email"
      v-model="registerData.email"
      @input="changeRegisterFields"
    />
    <input
      type="password"
      class="input-field"
      placeholder="Password"
      v-model="registerData.password"
      @input="changeRegisterFields"
    />
    <input
      type="password"
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
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { AuthRequest } from '../../../services/firebase/auth/auth.types'

  interface RegisterData extends AuthRequest {
    passwordRepeat: string
  }

  const emit = defineEmits<{
    (e: 'registerFieldsChanged', value: AuthRequest): void
  }>()

  const route = useRoute()

  const registerData = ref<RegisterData>({
    email: '',
    password: '',
    passwordRepeat: '',
  })

  function changeRegisterFields() {
    const email = registerData.value.email
    const password =
      registerData.value.password === registerData.value.passwordRepeat
        ? registerData.value.password
        : ''

    emit('registerFieldsChanged', {
      email,
      password,
    })
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

  .form-main {
    .form-link {
      color: #20df7f;
    }
  }
</style>
