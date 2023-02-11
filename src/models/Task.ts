import { Tag } from '../typings/tag'
import { BoardStatusSection } from './Board'

export interface Task {
  id: string
  title: string
  board: {
    id: string
    title: string
  }
  completeDate: string
  createDate: string
  criticalLvl: TaskCriticalLvlEnum
  description: string
  authorId: string
  executorId: string
  prefix: string
  tags: Tag[]
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  authorId: string
  creatingTime: string
  text: string
}

export enum TaskCriticalLvlEnum {
  VeryHigh = 'criticalLvl.veryHigh',
  High = 'criticalLvl.high',
  Medium = 'criticalLvl.medium',
  Low = 'criticalLvl.low',
}
