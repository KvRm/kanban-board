import { BoardStatusSection } from './Board'
import { User } from './User'

export interface Task {
  id: string
  prefix: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  board: {
    id: string
    title: string
    statusSection: StatusSection
  }
  author: User
  executor: User
  description: string
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  author: User
  creatingTime: string
  text: string
}

type StatusSection = Omit<BoardStatusSection, 'tasks'>

export enum TaskCriticalLvlEnum {
  VeryHigh = 'Очень высокая',
  High = 'Высокая',
  Medium = 'Средняя',
  Low = 'Низкая',
}
