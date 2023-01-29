import { SortTypeEnum } from '../components/Table'

const modes: Record<SortTypeEnum, Function> = {
  default: sortByDefault,
  date: sortByDate,
  criticalLvl: sordByCriticalLvl,
}

// TODO: Так же поступает значение order
export const useSortByType = (sortType: SortTypeEnum, a: string, b: string): number => {
  const method = modes[sortType]

  return method(a, b)
}

function sortByDefault(a: string, b: string): number {
  return a.toLowerCase().localeCompare(b.toLowerCase())
}

// TODO: Доделать
function sortByDate(a: string, b: string) {}

function sordByCriticalLvl(a: string, b: string) {}
