import { TaskLink } from '.'
import { Link } from '../common'

export interface TaskTableItem {
  category: TaskTableCategoriesEnum
  params: TaskTableLinkParams | TaskTableParagraphParams
}

interface TaskTableLinkParams {
  type: TaskTableItemType.Link
  linkParams: Link | TaskLink
}

interface TaskTableParagraphParams {
  type: TaskTableItemType.Paragragh
  title: string
}

export enum TaskTableItemType {
  Link = 'link',
  Paragragh = 'paragragh',
}

export enum TaskTableCategoriesEnum {
  Id = 'Идентификатор',
  TaskName = 'Название',
  Board = 'Доска',
  StatusSection = 'Статус',
  CriticalLvl = 'Критичность',
  CompleteDate = 'Крайний срок',
  Author = 'Автор',
}
