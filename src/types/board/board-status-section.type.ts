import { TaskLink } from '../task'

export interface BoardStatusSection {
  id: string
  title: string
  tasks: TaskLink[]
}
