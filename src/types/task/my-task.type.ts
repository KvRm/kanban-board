import { TaskCriticalLvlEnum } from '.'
import { IUser } from '../user'

export interface MyTask {
  id: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  board: MyTaskBoard
  author: IUser
}

interface MyTaskBoard {
  id: string
  title: string
  statusSection: string
}
