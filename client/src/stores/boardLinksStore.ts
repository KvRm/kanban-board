import { getDoc, doc, query, collection, where, getDocs } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Link } from '../components/Link'
import { db } from '../main'
import { Board } from '../models/Board'
import { useAuth } from '../services/firebase/auth/auth'

const { uid } = useAuth()

export const useBoardLinksStore = defineStore('boardLinks', () => {
  const loading = ref<boolean>(false)

  const allAvailableBoardLinks = ref<Link[]>([])
  const myBoardLinks = ref<Link[]>([])

  async function getMyAndAvailableBoardLinks() {
    try {
      loading.value = true
      const q = query(
        collection(db, 'board'),
        where('participantsId', 'array-contains', uid.value)
      )
      const boardLinks = await getDocs(q)

      const allBoards: Link[] = []
      const myBoards: Link[] = []

      boardLinks.forEach((board) => {
        const boardData = board.data() as Board
        const boardLink: Link = {
          id: board.id,
          title: boardData.title,
          type: 'board',
        }
        boardData.ownerId === uid.value
          ? myBoards.push(boardLink)
          : allBoards.push(boardLink)
      })

      allAvailableBoardLinks.value = allBoards
      myBoardLinks.value = myBoards
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { myBoardLinks, allAvailableBoardLinks, loading, getMyAndAvailableBoardLinks }
})
