export enum LinkRouteEnum {
  Board = 'board/',
  User = 'user/',
}

export type LinkType = 'board' | 'task' | 'user'

export interface Link {
  id: string
  title: string
  type: LinkType
}

export interface TaskLink extends Link {
  prefix: string
  board: {
    id: string
  }
}
