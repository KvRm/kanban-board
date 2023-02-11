import { query, collection, where, getDocs } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../../../main'
import { Board } from '../../../models/Board'
import { Sprint } from '../../../models/Sprint'
import { StatusSection } from '../../../models/StatusSection'
import { useAuth } from '../../../services/firebase/auth/auth'

const { uid } = useAuth()

export const useBoardStore = defineStore('board', () => {
  const loading = ref<boolean>(false)

  const board = ref<Board | null>(null)
  const sprints = ref<Sprint[] | null>(null)

  async function getBoard(boardId: string) {
    try {
      loading.value = true
      const q = query(
        collection(db, 'board'),
        where('participantsId', 'array-contains', uid.value)
      )
      const boardsResponse = await getDocs(q)

      boardsResponse.forEach((b) => {
        if (b.id === boardId) {
          board.value = { ...b.data(), id: b.id } as Board
        }
      })
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  async function getSprints(boardId: string) {
    const q = query(collection(db, 'sprint'), where('boardId', '==', boardId))
    const sprintsResponse = await getDocs(q)

    const sprintsData: Sprint[] = []

    sprintsResponse.forEach((s) => {
      sprintsData.push(s.data() as Sprint)
    })

    sprints.value = sprintsData
  }

  return { board, sprints, getBoard, getSprints }
})
