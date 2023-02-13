import { query, collection, where, getDocs } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../main'
import { StatusSection } from '../models/StatusSection'

export const useStatusSectionsStore = defineStore('statusSection', () => {
  const loading = ref<boolean>(false)

  const statusSections = ref<StatusSection[]>([])

  async function getStatusSections(boardId: string, sprintId: string) {
    try {
      loading.value = true

      const q = query(
        collection(db, 'statusSection'),
        where('boardId', '==', boardId),
        where('sprintId', '==', sprintId)
      )
      const statusSectionsResponse = await getDocs(q)

      const statusSectionsData: StatusSection[] = []

      statusSectionsResponse.forEach((s) => {
        statusSectionsData.push({ ...s.data(), id: s.id } as StatusSection)
      })

      statusSections.value = statusSectionsData
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, statusSections, getStatusSections }
})
