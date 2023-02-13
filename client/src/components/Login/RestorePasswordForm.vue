<template>
  <transition name="el-zoom-in-center" appear>
    <BaseForm class="restore-password-form" @submit="sendLetter">
      <template #header>
        <div class="form-header">
          <h1 class="title">Restore your password</h1>
        </div>
      </template>
      <template #main>
        <div class="form-main">
          <input
            type="text"
            class="input-field"
            placeholder="Account email"
            @input="error = ''"
            v-model="email"
          />
        </div>
      </template>
      <template #footer>
        <div class="form-footer">
          <div class="form-auth-route">
            <router-link to="login" class="form-link">To login</router-link>
          </div>
          <p class="form-error">{{ error }}</p>
          <button
            type="submit"
            class="submit-btn"
            :class="{ 'submit-btn-disabled': btnDisabled }"
            :disabled="btnDisabled"
            @click="sendLetter"
          >
            Restore password
          </button>
        </div>
      </template>
    </BaseForm>
  </transition>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { useAuth } from '../../services/firebase/auth/auth'
  import BaseForm from '../BaseForm.vue'

  const { error, restorePassword } = useAuth()

  const email = ref<string>('')
  const btnDisabled = computed<boolean>(() => !email.value)

  onMounted(() => {
    error.value = ''
  })

  async function sendLetter() {
    await restorePassword(email.value)
  }
</script>

<style scoped lang="scss">
  .form-error {
    color: var(--el-color-danger);
  }
  .restore-password-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #1d3043;
    z-index: 2;
    .form-header {
      margin-bottom: 16px;
      .title {
        margin-bottom: 25px;
        font-size: 22px;
        line-height: 30px;
      }
    }
    .form-main {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      .input-field {
        margin-bottom: 16px;
        height: 45px;
        background: #213d5b;
        border-radius: 10px;
        padding: 12px 18px;
        color: white;
        &::placeholder {
          color: white;
        }
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
        margin-bottom: 1rem;
      }
    }
  }

  .login-form-dark {
    text-shadow: none;
    color: white;
  }
</style>
