export interface TaskTableItem {
  category: TaskTableCategoriesEnum
  title: string
  id?: string
}

export enum TaskTableCategoriesEnum {
  'Идентификатор задачи' = 'Идентификатор задачи',
  'Название задачи' = 'Название задачи',
  'Доска' = 'Доска',
  'Статус' = 'Статус',
  'Критичность' = 'Критичность',
  'Крайний срок' = 'Крайний срок',
  'Автор' = 'Автор',
}

export enum TaskTableCategoriesLinksEnum {
  'Идентификатор задачи' = 'task',
  'Доска' = 'board',
  'Автор' = 'user',
}
