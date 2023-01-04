import { Task } from '..'

export interface Board {
  id: string
  title: string
  ownerId: string
  participantsIds: string[]
  statusSections: StatusSection[]
}

interface StatusSection {
  id: string
  title: string
  tasks: Task[]
}
