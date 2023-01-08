import { User } from '../user'

export interface Task {
  id: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  statusSection: string
  board: string
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

export enum TaskCriticalLvlEnum {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая',
}
