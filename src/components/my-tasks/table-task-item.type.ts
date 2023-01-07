export interface TableTaskItem {
  category: TableCategories
  title: string
  id?: string
}

export enum TableCategories {
  'Идентификатор задачи' = 'Идентификатор задачи',
  'Название задачи' = 'Название задачи',
  'Доска' = 'Доска',
  'Статус' = 'Статус',
  'Критичность' = 'Критичность',
  'Крайний срок' = 'Крайний срок',
  'Автор' = 'Автор',
}

export enum TableCategoriesLinks {
  'Идентификатор задачи' = 'task',
  'Доска' = 'board',
  'Автор' = 'user',
}
