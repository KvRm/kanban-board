<template>
  <div class="login" :class="{ 'login-dark': darkTheme }">
    <LoginForm :dark-theme="darkTheme" />
    <transition name="el-zoom-in-bottom" appear>
      <div class="login-footer">
        <img v-if="darkTheme" src="../assets/LoginFooterDark.svg" />
        <img v-if="!darkTheme" src="../assets/LoginFooterLight.svg" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from '../composables/useTheme'
  import LoginForm from '../components/Login/LoginForm.vue'

  const { darkTheme } = useTheme()
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
    background: #093545;
  }
</style>
