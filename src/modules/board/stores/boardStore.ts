import { query, collection, where, getDocs, doc, addDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { db } from '../../../main'
import { Board } from '../../../models/Board'
import { useAuthStore } from '../../login/stores/authStore'
import { useToasts } from '../../Toast/composables/useToasts'
import { Sprint } from '../../../models/Sprint'
import { StatusSection } from '../../../models/StatusSection'

export const useBoardStore = defineStore('board', () => {
  const authStore = useAuthStore()
  const uid = computed<string>(() => authStore.uid)
  const { dispatch } = useToasts()

  const loading = ref<boolean>(false)

  const board = ref<Board | null>(null)
  const sprints = ref<Sprint[]>([])
  const statusSections = ref<StatusSection[]>([])

  const choosenSprint = ref<Sprint | null>(null)

  async function loadBoard(boardId: string) {
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
      dispatch(e as string, 'error')
    } finally {
      loading.value = false
    }
  }

  async function createBoard(title: string) {
    try {
      loading.value = true

      const response = await addDoc(collection(db, 'board'), {
        title,
        ownerId: uid.value,
        participantsId: [uid.value],
      })
      const boardId = response.id

      dispatch(`Доска ${title} успешно создана`, 'success')

      return boardId
    } catch (e) {
      dispatch(e as string, 'error')
    } finally {
      loading.value = false
    }
  }

  async function loadSprints(boardId: string) {
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

  async function loadStatusSections(boardId: string, sprintId: string) {
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

  async function createStatusSection(
    boardId: string,
    color: string,
    title: string,
    sprintId: string
  ) {
    try {
      loading.value = true

      const newStatusSection: Omit<StatusSection, 'id'> = {
        title,
        boardId,
        order: statusSections.value.length,
        color,
        tasks: [],
        sprintId,
      }

      const response = await addDoc(collection(db, 'statusSection'), newStatusSection)
      const newStatusSectionId = response.id

      statusSections.value.push({ id: newStatusSectionId, ...newStatusSection })

      dispatch(`Статус секция ${title} успешно создана`, 'success')
    } catch (e) {
      dispatch(e as string, 'error')
    } finally {
      loading.value = false
    }
  }

  function clearStatusSections() {
    statusSections.value = []
  }

  function clearState() {
    board.value = null
    sprints.value = []
    statusSections.value = []
  }

  function chooseSprint(sprint: Sprint) {
    choosenSprint.value = sprint
  }

  return {
    loading,
    board,
    sprints,
    choosenSprint,
    statusSections,
    loadBoard,
    createBoard,
    createStatusSection,
    loadSprints,
    loadStatusSections,
    clearStatusSections,
    clearState,
    chooseSprint,
  }
})
