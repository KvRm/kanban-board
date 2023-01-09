export interface Link {
  id: string
  title: string
  linkRoute?: LinkRouteEnum
}

export enum LinkRouteEnum {
  Task = 'task/',
  Board = 'board/',
  User = 'user/',
}
