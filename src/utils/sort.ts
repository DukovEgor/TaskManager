import { Task } from '../types/task';

export const getSortedTasks = (tasks: Task[], sortType: string) => {
  switch (sortType) {
    case 'dateDown':
      return tasks.sort((a: Task, b: Task) => new Date(a.date).getMilliseconds() - new Date(b.date).getMilliseconds());
    case 'dateUp':
      return tasks.sort((a: Task, b: Task) => new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds());
    default:
      return tasks;
  }
};
