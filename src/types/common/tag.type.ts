import { ColorEnum } from './colors'

export interface Tag {
  title: string
  color: ColorEnum
  removableTag?: boolean
}
