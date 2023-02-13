import { query, collection, where, getDocs } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../main'
import { Board } from '../models/Board'
import { Sprint } from '../models/Sprint'
import { StatusSection } from '../models/StatusSection'
import { useAuth } from '../services/firebase/auth/auth'

const { uid } = useAuth()

export const useSprintsStore = defineStore('sprints', () => {
  const loading = ref<boolean>(false)

  const sprints = ref<Sprint[]>([])

  async function getSprints(boardId: string) {
    try {
      loading.value = true
      const q = query(collection(db, 'sprint'), where('boardId', '==', boardId))
      const sprintsResponse = await getDocs(q)

      const sprintsData: Sprint[] = []

      sprintsResponse.forEach((s) => {
        sprintsData.push({ ...s.data(), id: s.id } as Sprint)
      })

      sprints.value = sprintsData
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, sprints, getSprints }
})
