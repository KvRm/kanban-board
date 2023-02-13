import { TaskCriticalLvlEnum } from './Task'

export interface StatusSection {
  id: string
  title: string
  tasks: StatusSectionTask[]
  order: number
  color: string
}

export interface StatusSectionTask {
  id: string
  title: string
  prefix: string
  order: number
  criticalLvl: TaskCriticalLvlEnum
}
