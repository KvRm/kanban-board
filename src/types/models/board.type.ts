import { Task } from '..'

export interface Board {
  id: string
  title: string
  ownerId: string
  participantsIds: string[]
  statusSections: BoardStatusSection[]
}

export interface BoardStatusSection {
  id: string
  title: string
  tasks: Task[]
}
