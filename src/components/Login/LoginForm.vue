<template>
  <div class="login-form" :class="{ 'login-form-dark': darkTheme }">
    <transition name="el-zoom-in-center" appear>
      <BaseForm @submit="handleForm">
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
          <AuthorizationFields v-else @auth-fields-changed="rewriteAuthData" />
        </template>
        <template #footer>
          <p class="form-error">{{ auth.error.value }}</p>
          <div class="form-footer">
            <button
              type="submit"
              class="submit-btn"
              :class="{ 'submit-btn-disabled': btnDisabled }"
              :disabled="btnDisabled"
            >
              {{ btnText }}
            </button>
          </div>
        </template>
      </BaseForm>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAuth } from '../../services/firebase/auth'
  import { AuthRequest } from '../../services/firebase/types'
  import BaseForm from '../BaseForm.vue'
  import AuthorizationFields from './AuthorizationFields.vue'
  import RegisterFields from './RegisterFields.vue'

  defineProps<{
    darkTheme: boolean
  }>()

  const router = useRouter()
  const route = useRoute()
  const auth = useAuth()

  const registration = computed<boolean>(() => route.query.t === 'register')
  const title = computed<string>(() => (registration.value ? 'Sign up' : 'Sign in'))
  const btnDisabled = ref<boolean>(true)
  const btnText = ref<string>('Login')

  const authData = reactive<AuthRequest>({
    email: '',
    password: '',
  })

  watch(authData, () => {
    auth.error.value = ''

    !(authData.email && authData.password)
      ? (btnDisabled.value = true)
      : (btnDisabled.value = false)
  })

  function rewriteAuthData(value: AuthRequest) {
    authData.email = value.email
    authData.password = value.password
  }

  async function handleForm() {
    btnText.value = 'Loading...'
    btnDisabled.value = true
    if (registration.value) {
      await auth.register(authData.email, authData.password)
    } else {
      await auth.authorizate(authData.email, authData.password)
    }
    if (auth.userData.value) {
      router.push({ path: '/' })
    }
    btnDisabled.value = false
  }
</script>

<style scoped lang="scss">
  .form-error {
    color: var(--el-color-danger);
  }
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
    .form-footer {
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
        background: lighten($color: #20df7f, $amount: 25);
        cursor: default;
        &:hover {
          background: lighten($color: #20df7f, $amount: 25);
        }
        &:active {
          background: lighten($color: #20df7f, $amount: 25);
        }
      }
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
