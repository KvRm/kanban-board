<template>
  <div class="login-form" :class="{ 'login-form-dark': darkTheme }">
    <transition name="el-zoom-in-center" appear>
      <BaseForm>
        <template #header>
          <div class="form-header">
            <h1 class="title">{{ title }}</h1>
            <h3 class="subtitle">Start managing your tasks!</h3>
          </div>
        </template>
        <template #main>
          <RegisterFields
            v-if="registration"
            @register-fields-changed="rewriteAuthData"
          />
          <AuthorizationFields v-else />
        </template>
        <template #footer>
          <div class="form-footer">
            <button
              type="submit"
              class="submit-btn"
              :class="{ 'submit-btn-disabled': btnDisabled }"
              :disabled="btnDisabled"
            >
              {{ !!authData.password }}
              Login
            </button>
          </div>
        </template>
      </BaseForm>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import BaseForm from '../../../components/BaseForm.vue'
  import { AuthRequest } from '../../../services/firebase/auth/auth.types'
  import AuthorizationFields from './AuthorizationFields.vue'
  import RegisterFields from './RegisterFields.vue'

  defineProps<{
    darkTheme: boolean
  }>()

  const route = useRoute()

  const registration = computed<boolean>(() => route.query.t === 'register')
  const title = computed<string>(() => (registration.value ? 'Sign up' : 'Sign in'))
  const btnDisabled = computed<boolean>(
    () => !!(!!authData.value.email && !!authData.value.password)
  )

  const authData = ref<AuthRequest>({
    email: '',
    password: '',
  })

  function rewriteAuthData(value: AuthRequest) {
    authData.value.email = value.email
    authData.value.password = value.password
  }
</script>

<style scoped lang="scss">
  .login-form {
    display: flex;
    justify-content: center;
    text-align: center;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #224957;
    .form-header {
      margin-bottom: 36px;
      .title {
        margin-bottom: 40px;
        font-size: 64px;
        line-height: 80px;
      }
      .subtitle {
        font-size: 16px;
        line-height: 20px;
      }
    }

    .submit-btn {
      width: 300px;
      padding: 1rem 0;
      background: #20df7f;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      transition: all 0.2s;
      color: #224957;
      &:hover {
        background: darken($color: #20df7f, $amount: 7);
      }
      &:active {
        background: lighten($color: #20df7f, $amount: 7);
      }
    }
    .submit-btn-disabled {
      background: lighten($color: #20df7f, $amount: 7);
    }
  }

  .login-form-dark {
    text-shadow: none;
    color: white;
    .submit-btn {
      color: white;
    }
  }
</style>
