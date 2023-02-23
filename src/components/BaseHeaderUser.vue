<template>
  <div class="header-user">
    <div class="profile-photo"></div>
    <div class="text">{{ usernameOrEmail }}</div>
    <button class="logout-btn" @click="handleLogoutButton">
      <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useLocale } from '../modules/LocaleSwitcher/composables/useLocale'
  import { useAuthStore } from '../modules/login/stores/authStore'

  const { userData, logout } = useAuthStore()
  const router = useRouter()
  const { localeRoute } = useLocale()

  const usernameOrEmail = computed<string>(
    () => userData.value?.displayName || userData.value?.email || ''
  )

  async function handleLogoutButton() {
    try {
      await logout()
      router.push({ path: `${localeRoute.value}/login` })
    } catch (e: unknown) {
      console.log(e)
    }
  }
</script>

<style scoped lang="scss">
  .header-user {
    display: flex;
    gap: 1rem;
    .logout-btn {
      font-size: 1.5rem;
      color: var(--el-color-text-primary);
    }
  }
</style>
