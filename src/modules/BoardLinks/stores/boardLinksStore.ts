import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Link } from '../../../components/Link/types'
import { useAuthStore } from '../../login/stores/authStore'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { db } from '../../../main'
import { Board } from '../../../models/Board'

export const useBoardLinksStore = defineStore('boardLinks', () => {
  const authStore = useAuthStore()
  const uid = computed<string>(() => authStore.uid)

  const loading = ref<boolean>(false)

  const allAvailableBoardLinks = ref<Link[]>([])
  const myBoardLinks = ref<Link[]>([])

  async function loadMyAndAvailableBoardLinks() {
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

      myBoardLinks.value = myBoards
      allAvailableBoardLinks.value = allBoards
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { myBoardLinks, allAvailableBoardLinks, loading, loadMyAndAvailableBoardLinks }
})
