import { Link, TaskLink } from '../../../../components/Link'
import { SortTypeEnum, TableCategory } from '../../../../components/Table'
import { TaskCriticalLvlEnum } from '../../../../models/Task'
import { Tag } from '../../../../typings/tag'

export interface MyTask {
  id: TaskLink
  title: string
  board: Link
  statusSection: string
  tags: Tag[]
  criticalLvl: TaskCriticalLvlEnum
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
  CompleteDate = 'Крайний срок',
  Author = 'Автор',
}

export const TASK_TABLE_CATEGORIES: TableCategory[] = [
  { title: TaskTableCategoriesEnum.Id, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Title, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Board, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.StatusSection, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Tags },
  { title: TaskTableCategoriesEnum.CriticalLvl, sortable: SortTypeEnum.CriticalLvl },
  { title: TaskTableCategoriesEnum.CompleteDate, sortable: SortTypeEnum.Date },
  { title: TaskTableCategoriesEnum.Author, sortable: SortTypeEnum.Default },
]

