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
            @user-name-changed="rewriteUsername"
          />
          <AuthorizationFields v-else @auth-fields-changed="rewriteAuthData" />
        </template>
        <template #footer>
          <p class="form-error">{{ error }}</p>
          <div class="form-footer">
            <button
              type="submit"
              class="submit-btn"
              :class="{ 'submit-btn-disabled': btnDisabled }"
              :disabled="btnDisabled"
            >
              {{ btnText }}
            </button>
            <div class="form-auth-route">
              <router-link
                :to="{ path: authRoute.route.path, query: authRoute.route.query }"
                class="form-link"
              >
                {{ authRoute.label }}
              </router-link>
            </div>
          </div>
        </template>
      </BaseForm>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { updateProfile } from '@firebase/auth'
  import { computed, reactive, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { AuthRoute, AuthRouteProps, AuthRequest } from '../types'
  import { useLocale } from '../../LocaleSwitcher/composables/useLocale'
  import { useTheme } from '../../ThemeSwitcher/composables/useTheme'
  import { auth } from '../../../main'
  import { useAuthStore } from '../stores/authStore'
  import BaseForm from '../../../components/BaseForm.vue'
  import AuthorizationFields from './AuthorizationFields.vue'
  import RegisterFields from './RegisterFields.vue'

  const router = useRouter()
  const route = useRoute()
  const { localeRoute } = useLocale()
  const { darkTheme } = useTheme()
  const authStore = useAuthStore()

  const error = computed(() => authStore.error)
  const userData = computed(() => authStore.userData)

  const authRouteMap: AuthRoute = {
    register: {
      label: "Don't have an account?",
      route: {
        path: route.path,
        query: { t: 'register' },
      },
    },
    authorizate: {
      label: 'Already have an account?',
      route: {
        path: route.path,
        query: {},
      },
    },
  }
  const authRoute = computed<AuthRouteProps>(() =>
    registration.value ? authRouteMap.authorizate : authRouteMap.register
  )

  const registration = computed<boolean>(() => route.query.t === 'register')
  const title = computed<string>(() => (registration.value ? 'Sign up' : 'Sign in'))
  const btnDisabled = ref<boolean>(true)
  const btnText = ref<string>('Login')

  const authData = reactive<AuthRequest>({
    email: '',
    password: '',
  })

  const username = ref<string>('')

  watch(authData, () => {
    authStore.clearError()

    !(authData.email && authData.password)
      ? (btnDisabled.value = true)
      : (btnDisabled.value = false)
  })

  function rewriteAuthData(value: AuthRequest) {
    authData.email = value.email
    authData.password = value.password
  }

  function rewriteUsername(value: string) {
    username.value = value
  }

  async function handleForm() {
    btnText.value = 'Loading...'
    btnDisabled.value = true
    if (registration.value) {
      await authStore.register(authData.email, authData.password)
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: username.value,
        })
      }
    } else {
      await authStore.authorizate(authData.email, authData.password)
    }

    if (userData.value) {
      router.push({ path: `${localeRoute.value}/` })
    } else {
      btnText.value = 'Login'
    }
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
    color: #1d3043;
    z-index: 2;
    .form-header {
      margin-bottom: 26px;
      .title {
        margin-bottom: 25px;
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
        margin-bottom: 0.5rem;
        background: #409eff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        transition: all 0.2s;
        color: white;
        &:hover {
          background: darken($color: #409eff, $amount: 7);
        }
        &:active {
          background: lighten($color: #409eff, $amount: 7);
        }
      }
      .submit-btn-disabled {
        background: lighten($color: #409eff, $amount: 25);
        cursor: default;
        &:hover {
          background: lighten($color: #409eff, $amount: 25);
        }
        &:active {
          background: lighten($color: #409eff, $amount: 25);
        }
      }
      .form-auth-route {
        text-align: start;
      }
    }
  }

  .login-form-dark {
    text-shadow: none;
    color: white;
  }
</style>
