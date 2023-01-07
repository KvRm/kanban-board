import { ActionContext } from 'vuex'
import { Mutations } from './mutation-types'
import { RootState } from '../types'
import { LoginRequest, RegisterRequest } from '../../types/auth'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<RootState['auth'], RootState>, 'commit'>

export enum AuthActionsEnum {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

export interface Actions<A = AugmentedActionContext> {
  LOGIN(args: A, payload: LoginRequest): Promise<void>
  REGISTER(args: A, payload: RegisterRequest): Promise<void>
  LOGOUT(args: A): Promise<void>
}
