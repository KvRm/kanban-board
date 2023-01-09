import { BoardStatusSection } from '.'
import { User } from '../user'

export interface Board {
  id: string
  title: string
  owner: User
  participants: User[]
  statusSections: BoardStatusSection[]
}
