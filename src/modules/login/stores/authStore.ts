import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { computed, ref } from 'vue'
import { useToasts } from '../../Toast/composables/useToasts'
import { auth } from '../../../main'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { dispatch } = useToasts()

  const error = ref<string>('')

  const userData = ref<User | null>(null)
  const uid = computed<string>(() => (userData.value ? userData.value.uid : ''))

  async function register(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      userData.value = response.user
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        error.value = e.code
      }
    }

    return { userData, error }
  }

  async function authorizate(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      userData.value = response.user
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        error.value = e.code
      }
    }
  }

  async function logout() {
    try {
      await signOut(auth)
      userData.value = null
      error.value = ''
    } catch (e: unknown) {
      dispatch('Failed to logout', 'error')
    }
  }

  async function restorePassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        error.value = e.code
      }
    }
  }

  async function isLoggedIn() {
    try {
      await new Promise((resolve, reject) =>
        onAuthStateChanged(
          auth,
          (user: User | null) => {
            if (user) {
              userData.value = user
              resolve(user)
            } else {
              reject()
            }
          },
          (error: Error) => {
            reject(error)
          }
        )
      )
      return true
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        error.value = e.code
      }
    }
    return false
  }

  function clearError() {
    error.value = ''
  }

  return {
    userData,
    uid,
    error,
    register,
    isLoggedIn,
    authorizate,
    logout,
    restorePassword,
    clearError,
  }
})
