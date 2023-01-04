import { createStore } from 'vuex'
import { authModule } from './auth/module'
// import { boardModule } from './board'
import { RootState, Store } from './types'

export const store = createStore<RootState>({
  modules: {
    auth: authModule,
    // board: boardModule
  }
})

export function useStore() {
  return store as Store
}
