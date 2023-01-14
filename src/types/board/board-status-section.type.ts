import { StatusSectionTaskLink } from '../common/link.type'

export interface BoardStatusSection {
  id: string
  title: string
  tasks: StatusSectionTaskLink[]
}
