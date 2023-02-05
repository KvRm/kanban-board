import { Task } from './Task'
import { User } from './User'

export interface Board {
  id: string
  title: string
  owner: User
  participants: User[]
  statusSections: BoardStatusSection[]
}

export interface BoardStatusSection {
  id: string
  title: string
  tasks: BoardTask[]
}

export type BoardTask = Pick<Task, 'id' | 'title' | 'prefix' | 'criticalLvl'>
