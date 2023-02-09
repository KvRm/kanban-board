<template>
  <div class="login" :class="{ 'login-dark': darkTheme }">
    <LoginForm :dark-theme="darkTheme" />
    <transition name="el-zoom-in-bottom" appear>
      <div class="login-footer">
        <img :src="getImageUrl()" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useTheme } from '../composables/useTheme'
  import LoginForm from '../components/Login/LoginForm.vue'

  const { darkTheme } = useTheme()

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
