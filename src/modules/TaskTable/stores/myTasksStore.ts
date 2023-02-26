import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Task } from '../../../models/Task'
import { useAuthStore } from '../../login/stores/authStore'
import { useToasts } from '../../Toast/composables/useToasts'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../main'
import { MyTask } from '../types'
import { convertToMyTask } from '../utils/convertToMyTask'

export const useMyTasksStore = defineStore('myTasks', () => {
  const authStore = useAuthStore()
  const uid = computed<string>(() => authStore.uid)
  const { dispatch } = useToasts()

  const loading = ref<boolean>(false)

  const myTasks = ref<Task[]>([])
  const collectedMyTasks = computed<MyTask[]>(() =>
    myTasks.value.map<MyTask>((task) => convertToMyTask(task))
  )

  async function loadMyTasks() {
    try {
      loading.value = true
      myTasks.value = []

      const q = query(collection(db, 'task'), where('executorId', '==', uid.value))
      const myTasksResponse = await getDocs(q)

      const tasks: Task[] = []

      myTasksResponse.forEach((t) => {
        tasks.push({ ...t.data(), id: t.id } as Task)
      })

      myTasks.value = tasks
    } catch (e) {
      dispatch(e as string, 'error')
      myTasks.value = []
    } finally {
      loading.value = false
    }
  }

  return { loading, myTasks, loadMyTasks, collectedMyTasks }
})
