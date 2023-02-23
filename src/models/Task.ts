import { Tag } from '../typings/tag'

export interface Task {
  id: string
  title: string
  board: {
    id: string
    title: string
  }
  sprint: string
  completeDate: string
  createDate: string
  criticalLvl: TaskCriticalLvlEnum
  statusSection: string
  description: string
  authorId: string
  executorId: string
  prefix: string
  tags: TaskTag[]
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  authorId: string
  creatingTime: string
  text: string
}

export enum TaskCriticalLvlEnum {
  VeryHigh = 'criticalLvl.veryHigh',
  High = 'criticalLvl.high',
  Medium = 'criticalLvl.medium',
  Low = 'criticalLvl.low',
}

export interface TaskTag {
  label: string
  type: TagEnum
}

enum TagEnum {
  Default = '',
  Success = 'success',
  Info = 'info',
  Danger = 'danger',
  Warning = 'warning',
}
