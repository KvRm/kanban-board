import { SortTypeEnum, TableCategory } from '../../../../components/Table'
import { TaskTableCategoriesEnum } from './types'

export const TASK_TABLE_CATEGORIES: TableCategory[] = [
  { title: TaskTableCategoriesEnum.Id, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Title, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Board, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.StatusSection, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Tags },
  { title: TaskTableCategoriesEnum.CriticalLvl, sortable: SortTypeEnum.CriticalLvl },
  { title: TaskTableCategoriesEnum.CreateDate, sortable: SortTypeEnum.Date },
  { title: TaskTableCategoriesEnum.CompleteDate, sortable: SortTypeEnum.Date },
  { title: TaskTableCategoriesEnum.Author, sortable: SortTypeEnum.Default },
]
