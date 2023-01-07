import { useStore } from '../../stores'
import { AuthMutationEnum } from '../../stores/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from './auth'

export const isLoggedIn = async (): Promise<boolean> => {
  try {
    const store = useStore()

    await new Promise((resolve, reject) =>
      onAuthStateChanged(
        auth,
        (user: User | null) => {
          if (user) {
            store.commit(AuthMutationEnum.USER, user)
            resolve(user)
          } else {
            reject()
          }
        },
        (error: Error) => {
          store.commit(AuthMutationEnum.ERROR, error.message)
          reject(error.message)
        },
      ),
    )
    return true
  } catch (error: unknown) {
    return false
  }
}
