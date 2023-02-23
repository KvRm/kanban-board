import { Link, TaskLink } from '../../components/Link/types'
import { TaskCriticalLvlEnum, TaskTag } from '../../models/Task'

export interface MyTask {
  id: TaskLink
  title: string
  board: Link
  sprint: string
  statusSection: string
  tags: TaskTag[]
  criticalLvl: TaskCriticalLvlEnum
  createDate: string
  completeDate: string
  author: Link
}

export enum TaskTableCategoriesEnum {
  Id = 'categories.id',
  Title = 'categories.title',
  Board = 'categories.board',
  Sprint = 'categories.sprint',
  StatusSection = 'categories.statusSection',
  Tags = 'categories.tags',
  CriticalLvl = 'categories.criticalLvl',
  CreateDate = 'categories.createDate',
  CompleteDate = 'categories.completeDate',
  Author = 'categories.author',
}
