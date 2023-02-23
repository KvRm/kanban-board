import dayjs from 'dayjs'
import {
  SortOrderType,
  SortParams,
  SortTypeEnum,
} from '../components/SortableTable/types'
import { TaskCriticalLvlEnum } from '../models/Task'

const modes: Record<SortTypeEnum, Function> = {
  default: compareByDefault,
  date: compareByDate,
  criticalLvl: compareByCriticalLvl,
}

function compareByDefault(a: string, b: string, order: SortOrderType) {
  return order === 'increasing'
    ? a.toLowerCase().localeCompare(b.toLowerCase())
    : b.toLowerCase().localeCompare(a.toLowerCase())
}

function compareByDate(a: string, b: string, order: SortOrderType) {
  const date1 = dayjs(dayjs(a, 'DD/MM/YYYY').format('YYYY/MM/DD'))
  const date2 = dayjs(dayjs(b, 'DD/MM/YYYY').format('YYYY/MM/DD'))

  const diff = date1.diff(date2)

  return order === 'increasing' ? diff : -diff
}

function compareByCriticalLvl(
  a: TaskCriticalLvlEnum,
  b: TaskCriticalLvlEnum,
  order: SortOrderType
) {
  const indexA = Object.values(TaskCriticalLvlEnum).indexOf(a)
  const indexB = Object.values(TaskCriticalLvlEnum).indexOf(b)

  const diff = indexB - indexA

  return order === 'increasing' ? diff : -diff
}

/**
 * @example arr.sort((a,b) => useCompareByType(sortParams, a, b))
 * @param sortParams Получает параметры, в зависимости от которых выбирает, как фильтровать
 * @param a Первый элемент для сравнения
 * @param b Второй элемент для сравнения
 * @returns Возвращает число, используемое при сортировке
 */
export const useCompareByType = (
  sortParams: SortParams,
  a: string,
  b: string
): number => {
  const type = sortParams.type as unknown as SortTypeEnum

  const method = modes[type]

  return method(a, b, sortParams.order)
}
