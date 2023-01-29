import { SortTypeEnum, TableCategory } from '../../../components/Table'
import { TaskTableCategoriesEnum } from '../components/TaskTable'

const TABLE_CATEGORIES: TableCategory[] = [
  { title: TaskTableCategoriesEnum.Id, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Title, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Board, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.Tags },
  { title: TaskTableCategoriesEnum.StatusSection, sortable: SortTypeEnum.Default },
  { title: TaskTableCategoriesEnum.CriticalLvl, sortable: SortTypeEnum.CriticalLvl },
  { title: TaskTableCategoriesEnum.CompleteDate, sortable: SortTypeEnum.Date },
  { title: TaskTableCategoriesEnum.Author, sortable: SortTypeEnum.Default },
]

export default TABLE_CATEGORIES
