import { Task } from '../models/Task'
import { MyTask } from '../modules/storefront/components/TaskTable/types'

export const useTypeConverter = () => {
  function covertTaskToMyTask(task: Task): MyTask {
    return {
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
    }
  }

  return { covertTaskToMyTask }
}
