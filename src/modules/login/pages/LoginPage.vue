<template>
  <div class="login" :class="{ 'login-dark': darkTheme }">
    <LoginForm />
    <div class="login-footer">
      <img v-if="darkTheme" src="../../../assets/LoginFooterDark.svg" />
      <img v-if="!darkTheme" src="../../../assets/LoginFooterLight.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from '../../../composables/useTheme'
  import LoginForm from '../components/LoginForm.vue'

  const { darkTheme } = useTheme()
</script>

<style scoped lang="scss">
  .login {
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
    background: #224957;
  }
</style>
