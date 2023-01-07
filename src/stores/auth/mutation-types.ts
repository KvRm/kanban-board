import { User } from 'firebase/auth'
import { RootState } from '../types'

export enum AuthMutationEnum {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  USER = 'USER'
}

export type Mutations<S = RootState['auth']> = {
  [AuthMutationEnum.LOADING](state: S, payload: boolean): void
  [AuthMutationEnum.ERROR](state: S, payload: string): void
  [AuthMutationEnum.USER](state: S, payload: User | null): void
}
