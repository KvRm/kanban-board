import { MutationTree } from 'vuex'
import { RootState } from '../types'
import { AuthMutationEnum, Mutations } from './mutation-types'

export const mutations: MutationTree<RootState['auth']> & Mutations = {
  [AuthMutationEnum.LOADING]: (state, loading) => {
    state.loading = loading
  },

  [AuthMutationEnum.ERROR]: (state, message) => {
    state.error = message
  },

  [AuthMutationEnum.USER]: (state, user) => {
    state.user = user
  }
}
