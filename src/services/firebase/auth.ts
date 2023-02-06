import { getAuth } from 'firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'

export const auth = getAuth()

// export const isLoggedIn = async (): Promise<boolean> => {
//   try {
//     const store = useStore()

//     await new Promise((resolve, reject) =>
//       onAuthStateChanged(
//         auth,
//         (user: User | null) => {
//           if (user) {
//             store.commit(AuthMutationEnum.USER, user)
//             resolve(user)
//           } else {
//             reject()
//           }
//         },
//         (error: Error) => {
//           store.commit(AuthMutationEnum.ERROR, error.message)
//           reject(error.message)
//         }
//       )
//     )
//     return true
//   } catch (error: unknown) {
//     return false
//   }
// }
