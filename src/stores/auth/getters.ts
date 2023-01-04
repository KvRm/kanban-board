import { User } from 'firebase/auth'
import { GetterTree } from 'vuex'
import { RootState } from '../types'

export type Getters<S = RootState['auth']> = {
  errorState(state: S): string
  loadingState(state: S): boolean
  user(state: S): User | null
}

export const getters: GetterTree<RootState['auth'], RootState> & Getters = {
  errorState: (state) => state.error,
  loadingState: (state) => state.loading,
  user: (state) => state.user
}
