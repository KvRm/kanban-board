<template>
  <div class="login" :class="{ 'login-dark': darkTheme }">
    <component :is="form" />
    <transition name="el-zoom-in-bottom" appear>
      <div class="login-footer">
        <img :src="getImageUrl()" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from '../composables/useTheme'
  import { useRoute } from 'vue-router'
  import { computed, defineAsyncComponent } from 'vue'
  import { AuthFormType } from '../components/Login'
  import { AsyncComponent } from '../typings/component'

  const LoginForm = defineAsyncComponent(
    () => import('../components/Login/LoginForm.vue')
  )
  const RestorePasswordForm = defineAsyncComponent(
    () => import('../components/Login/RestorePasswordForm.vue')
  )

  const { darkTheme } = useTheme()
  const route = useRoute()

  const authFormMap: Record<AuthFormType, AsyncComponent> = {
    LoginForm: LoginForm,
    RestorePasswordForm: RestorePasswordForm,
  }
  const form = computed<AsyncComponent>(() =>
    route.query.a === 'restore-password'
      ? authFormMap.RestorePasswordForm
      : authFormMap.LoginForm
  )

  function getImageUrl() {
    const imgName = darkTheme.value ? 'Dark' : 'Light'
    return new URL(`../assets/LoginFooter${imgName}.svg`, import.meta.url).href
  }
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    .login-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .login-dark {
    background: #1d3043;
  }
</style>
