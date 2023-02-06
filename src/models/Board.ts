import { Task } from './Task'

export interface Board {
  id: string
  title: string
  ownerId: string
  participantsId: string[]
  currentSprint: Sprint
  previousSprints: Sprint[]
}

export interface Sprint {
  startDate: string
  endDate: string
  statusSections: BoardStatusSection[]
}

export interface BoardStatusSection {
  id: string
  title: string
  tasks: BoardTask[]
}

export type BoardTask = Pick<Task, 'id' | 'title' | 'prefix' | 'criticalLvl'>
