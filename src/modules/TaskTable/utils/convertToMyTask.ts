import { Task } from '../../../models/Task'
import { MyTask } from '../types'

export const convertToMyTask = (task: Task): MyTask => ({
  id: {
    id: task.id,
    title: `${task.prefix}-${task.id}`,
    prefix: `${task.prefix}`,
    board: {
      id: task.board.id,
    },
    type: 'task',
  },
  title: task.title,
  board: {
    id: task.board.id,
    title: task.board.title,
    type: 'board',
  },
  sprint: task.sprint,
  statusSection: task.statusSection,
  tags: task.tags,
  criticalLvl: task.criticalLvl,
  createDate: task.createDate,
  completeDate: task.completeDate,
  author: {
    id: task.authorId,
    title: 'SomeName',
    type: 'user',
  },
})
