import { addDoc, collection } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { db } from '../../../main'
import { useAuthStore } from '../../login/stores/authStore'
import { useToasts } from '../../Toast/composables/useToasts'

export const useCreateBoardStore = defineStore('createBoard', () => {
  const authStore = useAuthStore()
  const uid = computed<string>(() => authStore.uid)
  const { dispatch } = useToasts()

  const loading = ref<boolean>(false)

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

  return {
    loading,

    createBoard,
  }
})
