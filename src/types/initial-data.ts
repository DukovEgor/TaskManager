import { Task } from './task';

export type InitialData = {
  tasks: Task[];
};

export type InitialProcess = {
  currentEditing: boolean;
  currentSortType: string;
  currentFilter: string;
};
