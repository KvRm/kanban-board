import { Link, TaskLink } from '../../../../components/Link'
import { TaskCriticalLvlEnum } from '../../../../models/Task'

export interface MyTask {
  id: TaskLink
  title: string
  board: Link
  statusSection: string
  // TODO: изменить тип тега
  tags: string
  criticalLvl: TaskCriticalLvlEnum
  completeDate: string
  author: Link
}

export enum TaskTableCategoriesEnum {
  Id = 'Идентификатор',
  TaskName = 'Название',
  Board = 'Доска',
  StatusSection = 'Статус',
  Tags = 'Теги',
  CriticalLvl = 'Критичность',
  CompleteDate = 'Крайний срок',
  Author = 'Автор',
}
