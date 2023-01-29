export interface SortParams {
  category: string | null
  type: SortType
}

export type SortType = 'increasing' | 'decreasing' | null
