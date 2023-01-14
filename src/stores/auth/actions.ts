import router from '../../router'
import { ActionTree } from 'vuex'
import { Actions, AuthActionsEnum } from './action-types'
import { RootState } from '../../stores/types'
import { AuthMutationEnum } from './mutation-types'
import { LoginRequest, RegisterRequest } from '../../types/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../../services/firebase/auth'

export const actions: ActionTree<RootState['auth'], RootState> & Actions = {
  async [AuthActionsEnum.LOGIN]({ commit }, body: LoginRequest) {
    try {
      commit(AuthMutationEnum.USER, null)
      commit(AuthMutationEnum.LOADING, true)

      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password,
      )

      const user = userCredential.user
      commit(AuthMutationEnum.USER, user)

      router.push('/')
    } catch (error) {
      commit(AuthMutationEnum.ERROR, (error as Error).message)
    } finally {
      commit(AuthMutationEnum.LOADING, false)
    }
  },

  async [AuthActionsEnum.REGISTER]({ commit }, body: RegisterRequest) {
    try {
      commit(AuthMutationEnum.USER, null)
      commit(AuthMutationEnum.LOADING, true)

      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        body.email,
        body.password,
      )

      const user = userCredential.user
      commit(AuthMutationEnum.USER, user)

      router.push('/')
    } catch (error) {
      commit(AuthMutationEnum.ERROR, (error as Error).message)
    } finally {
      commit(AuthMutationEnum.LOADING, false)
    }
  },

  async [AuthActionsEnum.LOGOUT]({ commit }) {
    try {
      commit(AuthMutationEnum.LOADING, true)

      await signOut(auth)

      commit(AuthMutationEnum.USER, null)

      router.push('/login')
    } catch (error) {
      commit(AuthMutationEnum.ERROR, (error as Error).message)
    } finally {
      commit(AuthMutationEnum.LOADING, false)
    }
  },
}
