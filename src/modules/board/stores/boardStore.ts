import {
  query,
  collection,
  where,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'
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
  const choosenSprint = ref<Sprint | null>(null)
  const statusSections = ref<StatusSection[]>([])

  const isBoardAvailable = computed<boolean>(() => !!board.value)
  const boardTitle = computed<string | undefined>(() => board.value?.title)

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
      statusSectionsData.sort((a, b) => a.order - b.order)

      statusSections.value = statusSectionsData
    } catch (e) {
      console.log(e)
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

  async function createStatusSection(payload: Omit<StatusSection, 'id'>) {
    try {
      loading.value = true

      const response = await addDoc(collection(db, 'statusSection'), payload)
      const newStatusSectionId = response.id

      statusSections.value.push({ id: newStatusSectionId, ...payload })

      dispatch(`Статус секция ${payload.title} успешно создана`, 'success')
    } catch (e) {
      dispatch(e as string, 'error')
    } finally {
      loading.value = false
    }
  }

  function createTask() {}

  async function removeStatusSection(sectionId: string) {
    try {
      await deleteDoc(doc(db, 'statusSection', sectionId))
      statusSections.value = statusSections.value.filter((s) => s.id !== sectionId)
      dispatch(`Статус секция удалена`, 'success')
    } catch (e) {
      dispatch(`Не удалось удалить статус секцию`, 'error')
    }
  }

  async function updateTitle(sectionId: string, newTitle: string) {
    try {
      await updateDoc(doc(db, 'statusSection', sectionId), { title: newTitle })
      dispatch('Название успешно изменено', 'success')
      return true
    } catch (e) {
      dispatch('Не удалось изменить название', 'error')
      return false
    }
  }

  function chooseSprint(sprint: Sprint) {
    choosenSprint.value = sprint
  }

  function clearStatusSections() {
    statusSections.value = []
  }

  function clearState() {
    board.value = null
    sprints.value = []
    statusSections.value = []
    choosenSprint.value = null
  }

  return {
    loading,

    board,
    sprints,
    choosenSprint,
    statusSections,

    isBoardAvailable,
    boardTitle,

    loadBoard,
    loadSprints,
    loadStatusSections,
    createBoard,
    createStatusSection,
    createTask,
    removeStatusSection,
    updateTitle,
    chooseSprint,
    clearStatusSections,
    clearState,
  }
})
