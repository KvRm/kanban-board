export interface Task {
  id: string
  title: string
  criticalLvl: TaskCriticalLvl
  completeDate: string
  statusSection: string
  board: string
  author: {
    name: string
    id: string
  }
  executor: {
    name: string
    id: string
  }
  description: string
  comments: TaskComment[]
}

interface TaskComment {
  id: string
  author: {
    name: string
    id: string
  }
  creatingTime: string
  text: string
}

export enum TaskCriticalLvl {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая',
}
