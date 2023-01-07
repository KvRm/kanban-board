import { BoardStatusSection } from '.'

export interface IBoard {
  id: string
  title: string
  ownerId: string
  participantsId: string[]
  statusSections: BoardStatusSection[]
}
