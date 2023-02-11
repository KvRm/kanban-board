import { Sprint } from './Sprint'
import { Task } from './Task'

export interface Board {
  id: string
  title: string
  ownerId: string
  participantsId: string[]
  sprints: Sprint[]
}

export interface BoardStatusSection {
  id: string
  title: string
  tasks: BoardTask[]
}

export type BoardTask = Pick<Task, 'id' | 'title' | 'prefix' | 'criticalLvl'>
