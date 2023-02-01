import { Link, TaskLink } from '../../../../components/Link'
import { TaskCriticalLvlEnum } from '../../../../models/Task'
import { Tag } from '../../../../typings/tag'

export interface MyTask {
  id: TaskLink
  title: string
  board: Link
  statusSection: string
  tags: Tag[]
  criticalLvl: TaskCriticalLvlEnum
  createDate: string
  completeDate: string
  author: Link
}

export enum TaskTableCategoriesEnum {
  Id = 'Идентификатор',
  Title = 'Название',
  Board = 'Доска',
  StatusSection = 'Статус',
  Tags = 'Теги',
  CriticalLvl = 'Критичность',
  CreateDate = 'Дата создания',
  CompleteDate = 'Крайний срок',
  Author = 'Автор',
}
