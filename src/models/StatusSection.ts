import { TaskCriticalLvlEnum, TaskTag } from './Task'

export interface StatusSection {
  id: string
  boardId: string
  title: string
  tasks: StatusSectionTask[]
  order: number
  color: string
  sprintId: string
}

export interface StatusSectionTask {
  id: string
  title: string
  prefix: string
  order: number
  tags: TaskTag[]
  criticalLvl: TaskCriticalLvlEnum
}
