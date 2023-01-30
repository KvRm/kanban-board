import { Ref } from 'vue'
import { SortParams } from '../../../components/Table'
import { useCompareByType } from '../../../lib/useCompare'
import { MyTask, TaskTableCategoriesEnum } from '../components/TaskTable'

export const useTaskTableSort = (tasks: Ref<MyTask[]>) => {
  return (sortParams: SortParams) => {
    switch (sortParams.category) {
      case TaskTableCategoriesEnum.Id: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.id.title, b.id.title)
        })
        break
      }
      case TaskTableCategoriesEnum.Title: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.title, b.title)
        })
        break
      }
      case TaskTableCategoriesEnum.Board: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.board.title, b.board.title)
        })
        break
      }
      case TaskTableCategoriesEnum.StatusSection: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.statusSection, b.statusSection)
        })
        break
      }
      case TaskTableCategoriesEnum.CriticalLvl: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.criticalLvl, b.criticalLvl)
        })
        break
      }
      case TaskTableCategoriesEnum.CompleteDate: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.completeDate, b.completeDate)
        })
        break
      }
      case TaskTableCategoriesEnum.Author: {
        tasks.value.sort((a, b) => {
          return useCompareByType(sortParams, a.author.title, b.author.title)
        })
        break
      }
    }
  }
}
