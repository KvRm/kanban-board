import { TaskCriticalLvlEnum } from '../task'

export enum LinkRouteEnum {
  Task = 'task/',
  Board = 'board/',
  User = 'user/',
}

export interface Link {
  id: string
  title: string
  linkRoute?: LinkRouteEnum
}

export interface TaskLink extends Link {
  prefix: string
  board: {
    id: string
  }
}

export interface StatusSectionTaskLink extends TaskLink {
  criticalLvl: TaskCriticalLvlEnum
}
