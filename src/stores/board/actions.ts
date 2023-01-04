// import router from '@/router'
// import { getUserInfo, login, register } from '@/services/auth'
// import { TOKEN_KEY } from '@/lib/localStorageKeys'

// import { ActionTree } from 'vuex'
// import { Actions, AuthActionsEnum } from './action-types'
// import { RootState } from '@/stores/types'
// import { LoginRequest, RegisterRequest } from '@/types'
// import { AuthMutationEnum } from './mutation-types'

// export const actions: ActionTree<RootState['board'], RootState> & Actions = {
//   async [AuthActionsEnum.GET_USER_INFO]({ commit }) {
//     try {
//       commit(AuthMutationEnum.ERROR, '')
//       commit(AuthMutationEnum.LOADING, true)

//       const { data, status } = await getUserInfo()

//       if (status !== 200) throw new Error('Fail to authenticate')

//       commit(AuthMutationEnum.USER, data.user)
//       commit(AuthMutationEnum.AUTHENTICATED, true)

//       return true
//     } catch (error) {
//       window.localStorage.removeItem(TOKEN_KEY)

//       commit(AuthMutationEnum.ERROR, (error as Error).message)
//       return false
//     } finally {
//       commit(AuthMutationEnum.LOADING, false)
//     }
//   },

//   async [AuthActionsEnum.LOGIN](
//     { dispatch, commit, state },
//     body: LoginRequest
//   ) {
//     try {
//       commit(AuthMutationEnum.LOADING, true)

//       const { data, status } = await login(body)

//       if (status !== 200) throw new Error('Fail to login')

//       window.localStorage.setItem(TOKEN_KEY, data.token)

//       await dispatch(AuthActionsEnum.GET_USER_INFO)

//       if (!state.authenticated) return

//       router.push('/')
//     } catch (error) {
//       commit(AuthMutationEnum.ERROR, (error as Error).message)
//     } finally {
//       commit(AuthMutationEnum.LOADING, false)
//     }
//   },

//   async [AuthActionsEnum.REGISTER](
//     { commit, dispatch, state },
//     body: RegisterRequest
//   ) {
//     try {
//       commit(AuthMutationEnum.ERROR, '')
//       commit(AuthMutationEnum.LOADING, true)

//       const { data, status } = await register(body)

//       if (status !== 201) throw new Error('Fail to register')

//       window.localStorage.setItem(TOKEN_KEY, data.token)

//       await dispatch(AuthActionsEnum.GET_USER_INFO)

//       if (!state.authenticated) throw new Error('Session Expired')

//       router.push('/')
//     } catch (error) {
//       commit(AuthMutationEnum.ERROR, (error as Error).message)
//     } finally {
//       commit(AuthMutationEnum.LOADING, false)
//     }
//   },

//   async [AuthActionsEnum.AUTO_LOGIN]({ dispatch, commit, state }) {
//     try {
//       await dispatch(AuthActionsEnum.GET_USER_INFO)

//       if (!state.authenticated) throw new Error('Session Expired')

//       return Promise.resolve()
//     } catch (err) {
//       commit(AuthMutationEnum.AUTHENTICATED, false)
//       commit(AuthMutationEnum.ERROR, (err as Error).message)
//     }
//   },

//   [AuthActionsEnum.LOGOUT]({ commit }) {
//     commit(AuthMutationEnum.RESET, undefined)

//     router.push('/login')

//     window.localStorage.removeItem(TOKEN_KEY)
//   }
// }
