<template>
  <div class="user-profile">
    {{ user?.email }}
    <div class="logout" @click="logout">
      <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/stores'
import { AuthActionsEnum } from '@/stores/auth'
import { User } from 'firebase/auth'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    const user = computed<User | null>(() => store.getters.user)

    const logout = () => {
      store.dispatch(AuthActionsEnum.LOGOUT, undefined)
    }

    return {
      user,
      logout
    }
  }
})
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: auto auto;
  height: 100%;
  align-content: center;
  align-items: center;
}

.logout {
  height: 100%;
}

svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
