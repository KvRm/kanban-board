import { Ref } from 'vue'
import { SortParams } from '../../../components/SortableTable/types'
import { useCompareByType } from '../../../lib/useCompare'
import { MyTask, TaskTableCategoriesEnum } from '../types'

export const useTaskTableSort = (tasks: Ref<MyTask[]>) => {
  return (sortParams: SortParams) => {
    let aValue = '',
      bValue = ''

    tasks.value.sort((a, b) => {
      switch (sortParams.category) {
        case TaskTableCategoriesEnum.Id: {
          aValue = a.id.title
          bValue = b.id.title
          break
        }
        case TaskTableCategoriesEnum.Title: {
          aValue = a.title
          bValue = b.title
          break
        }
        case TaskTableCategoriesEnum.Board: {
          aValue = a.board.title
          bValue = b.board.title
          break
        }
        case TaskTableCategoriesEnum.StatusSection: {
          aValue = a.statusSection
          bValue = b.statusSection
          break
        }
        case TaskTableCategoriesEnum.CriticalLvl: {
          aValue = a.criticalLvl
          bValue = b.criticalLvl
          break
        }
        case TaskTableCategoriesEnum.CreateDate: {
          aValue = a.createDate
          bValue = b.createDate
          break
        }
        case TaskTableCategoriesEnum.CompleteDate: {
          aValue = a.completeDate
          bValue = b.completeDate
          break
        }
        case TaskTableCategoriesEnum.Author: {
          aValue = a.author.title
          bValue = b.author.title
          break
        }
      }

      return useCompareByType(sortParams, aValue, bValue)
    })
  }
}
