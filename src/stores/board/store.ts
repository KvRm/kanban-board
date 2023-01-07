// import type { RootState } from '@/stores/types'

// import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
// import { Actions } from './action-types'
// import { Getters } from './getters'
// import { Mutations } from './mutation-types'

// export type BoardStore<S = RootState['board']> = Omit<
//   VuexStore<S>,
//   'getters' | 'commit' | 'dispatch'
// > & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>
//   }
// }
