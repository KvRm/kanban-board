export interface Task {
  id: string
  title: string
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: {
    name: string
    id: string
  }
  executor: {
    name: string
    id: string
  }
  description: string
  comments: Comment[]
}

interface Comment {
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
  low = 'Низкая'
}
