import { BoardStatusSection } from '.'

export interface Board {
  id: string
  title: string
  ownerId: string
  participantsId: string[]
  statusSections: BoardStatusSection[]
}
