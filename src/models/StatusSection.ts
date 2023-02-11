import { TaskCriticalLvlEnum } from './Task'

export interface StatusSection {
  id: string
  title: string
  tasks: StatusSectionTask[]
  order: number
  color: string
}

interface StatusSectionTask {
  id: string
  title: string
  order: number
  criticalLvl: TaskCriticalLvlEnum
}
