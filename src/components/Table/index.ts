export interface SortParams {
  category: string | null
  order: SortOrderType
  type: SortTypeEnum | null
}

export type SortOrderType = 'increasing' | 'decreasing' | null

export enum SortTypeEnum {
  Default = 'default',
  Date = 'date',
  CriticalLvl = 'criticalLvl',
}

export type TableCategory = {
  title: string
  sortable?: SortTypeEnum
}
