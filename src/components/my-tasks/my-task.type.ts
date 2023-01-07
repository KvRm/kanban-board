import { TaskCriticalLvl } from '../../types/index'

export interface MyTask {
  id: string
  title: string
  criticalLvl: TaskCriticalLvl
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
