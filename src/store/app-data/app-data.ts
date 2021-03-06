import { createSlice } from '@reduxjs/toolkit';
import { MOCK_TASKS } from '../../data/mock-tasks';
import { InitialData } from '../../types/initial-data';
import { NameSpace } from '../../utils/const';

const initialState: InitialData = {
  tasks: MOCK_TASKS,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    setTaskArchive: (state, action) => {
      const findedTask = state.tasks.find((task) => task.id === action.payload);
      if (findedTask) {
        findedTask.isArchive = true;
      }
    },
    setTaskActive: (state, action) => {
      const findedTask = state.tasks.find((task) => task.id === action.payload);
      if (findedTask) {
        findedTask.isArchive = false;
      }
    },
    clearArchive: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isArchive);
    },
  },
});

export const { addTask, setTaskArchive, setTaskActive, clearArchive } = appData.actions;
