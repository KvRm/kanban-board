export interface TaskTableItem {
  category: TaskTableCategoriesEnum
  params: TaskTableLink | TaskTableParagraph
}

interface TaskTableLink {
  type: TaskTableItemType.link
  title: string
  id: string
  prefix: TaskTableCategoriesLinkPrefixEnum
}

interface TaskTableParagraph {
  type: TaskTableItemType.paragragh
  title: string
}

export enum TaskTableItemType {
  'link' = 'link',
  'paragragh' = 'paragragh',
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

export enum TaskTableCategoriesLinkPrefixEnum {
  'Идентификатор задачи' = 'task/',
  'Доска' = 'board/',
  'Автор' = 'user/',
}
