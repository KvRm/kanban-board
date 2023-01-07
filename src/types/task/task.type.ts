import { IUser } from '..'

export interface ITask {
  id: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  statusSection: string
  board: string
  author: IUser
  executor: IUser
  description: string
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  author: IUser
  creatingTime: string
  text: string
}

export enum TaskCriticalLvlEnum {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая',
}
