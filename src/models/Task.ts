import { BoardStatusSection } from './Board'

export interface Task {
  id: string
  prefix: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  createDate: string
  completeDate: string
  board: {
    id: string
    title: string
    statusSection: StatusSection
  }
  authorId: string
  executorId: string
  description: string
  // files
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  authorId: string
  creatingTime: string
  text: string
}

type StatusSection = Omit<BoardStatusSection, 'tasks'>

export enum TaskCriticalLvlEnum {
  VeryHigh = 'criticalLvl.veryHigh',
  High = 'criticalLvl.high',
  Medium = 'criticalLvl.medium',
  Low = 'criticalLvl.low',
}
