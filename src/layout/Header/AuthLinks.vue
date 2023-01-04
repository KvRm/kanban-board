<template>
  <div class="auth-menu">
    <router-link to="/login?type=auth">
      <ButtonUI :color="ButtonColor.green" :size="ButtonSize.medium">
        Войти
      </ButtonUI>
    </router-link>
    <router-link to="/login?type=register">
      <ButtonUI :color="ButtonColor.green" :size="ButtonSize.medium">
        Регистрация
      </ButtonUI>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'

export default defineComponent({
  components: { ButtonUI },

  setup() {
    return {
      ButtonColor,
      ButtonSize
    }
  }
})
</script>

<style scoped>
.auth-menu {
  display: flex;
  gap: 10px;
}
</style>
