import { TaskCriticalLvlEnum } from '.'
import { User } from '../user'

export interface MyTask {
  id: string
  prefix: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  board: {
    id: string
    title: string
    statusSection: string
  }
  author: User
}
