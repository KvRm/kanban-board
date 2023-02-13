import { query, collection, where, getDocs } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '../main'
import { Board } from '../models/Board'
import { Task } from '../models/Task'
import { useAuth } from '../services/firebase/auth/auth'

const { uid } = useAuth()

export const useMyTasksStore = defineStore('myTasks', () => {
  const loading = ref<boolean>(false)

  const myTasks = ref<Task[]>([])

  async function getMyTasks() {
    try {
      loading.value = true
      const q = query(collection(db, 'task'), where('executorId', '==', uid.value))
      const myTasksResponse = await getDocs(q)

      const tasks: Task[] = []

      myTasksResponse.forEach((t) => {
        tasks.push({ ...t.data(), id: t.id } as Task)
      })

      myTasks.value = tasks
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  return { myTasks, getMyTasks }
})
