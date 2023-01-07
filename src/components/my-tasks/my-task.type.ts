import { TaskCriticalLvlEnum } from '../../types/index'

export interface MyTask {
  id: string
  title: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  board: {
    id: string
    title: string
    statusSection: string
  }
  author: {
    id: string
    name: string
  }
}
