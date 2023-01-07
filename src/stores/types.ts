import { IBoard } from '../types'
import { User } from 'firebase/auth'
import { AuthStore } from './auth'
// import { BoardStore } from './board'

export interface RootState {
  auth: {
    user: User | null
    loading: boolean
    error: string
  }
  board: {
    board?: IBoard
    isAvailable: boolean
    loading: boolean
    error: string
  }
}

export type Store = AuthStore<Pick<RootState, 'auth'>>
// & BoardStore<Pick<RootState, 'board'>>
