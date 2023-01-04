// import { ActionContext } from 'vuex'
// import { Mutations } from './mutation-types'
// import { RootState } from '../types'

// // типизация стейта
// type AugmentedActionContext = {
//   commit<K extends keyof Mutations>(
//     key: K,
//     payload: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>
// } & Omit<ActionContext<RootState['board'], RootState>, 'commit'>

// export enum AuthActionsEnum {
//   LOGIN = 'LOGIN',
//   REGISTER = 'REGISTER',
//   LOGOUT = 'LOGOUT',
//   GET_USER_INFO = 'GET_USER_INFO',
//   AUTO_LOGIN = 'AUTO_LOGIN'
// }

// // типипзация экшенсов
// export interface Actions {
//   LOGIN(args: AugmentedActionContext, payload: LoginRequest): Promise<void>
//   REGISTER(
//     args: AugmentedActionContext,
//     payload: RegisterRequest
//   ): Promise<void>
//   LOGOUT(args: AugmentedActionContext): void
//   GET_USER_INFO(args: AugmentedActionContext): Promise<boolean>
//   AUTO_LOGIN(args: AugmentedActionContext): Promise<void>
// }
