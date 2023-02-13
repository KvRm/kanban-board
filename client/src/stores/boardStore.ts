import { query, collection, where, getDocs, doc, addDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../main'
import { Board } from '../models/Board'
import { useAuth } from '../services/firebase/auth/auth'

const { uid } = useAuth()

export const useBoardStore = defineStore('board', () => {
  const loading = ref<boolean>(false)

  const board = ref<Board | null>(null)

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

  async function createBoard(title: string) {
    try {
      loading.value = true
      const creatingBoard: Omit<Board, 'id'> = {
        title: title,
        ownerId: uid.value,
        participantsId: [uid.value],
      }
      await addDoc(collection(db, 'board'), creatingBoard)
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, board, getBoard, createBoard }
})
