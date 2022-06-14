import { Task } from '../types/task';

export const getFilteredTasks = (tasks: Task[], filterType: string) => {
  switch (filterType) {
    case 'active':
      return tasks.filter((task: Task) => !task.isArchive);
    case 'archive':
      return tasks.filter((task: Task) => task.isArchive);
    default:
      return tasks;
  }
};
