import { TaskCriticalLvlEnum } from '.'
import { User } from '../user'

export interface MyTask {
  id: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  board: MyTaskBoard
  author: User
}

interface MyTaskBoard {
  id: string
  title: string
  statusSection: string
}
