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
  Id = 'categories.id',
  Title = 'categories.title',
  Board = 'categories.board',
  StatusSection = 'categories.statusSection',
  Tags = 'categories.tags',
  CriticalLvl = 'categories.criticalLvl',
  CreateDate = 'categories.createDate',
  CompleteDate = 'categories.completeDate',
  Author = 'categories.author',
}
