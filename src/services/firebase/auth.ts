import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { computed, ref } from 'vue'
import { auth } from '../../main'

const userData = ref<User | null>(null)
const error = ref<string>('')
const uid = computed<string>(() => (userData.value ? userData.value.uid : ''))

export const useAuth = () => {
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

  return { userData, uid, error, register, isLoggedIn, authorizate }
}
