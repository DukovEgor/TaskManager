import { createSlice } from '@reduxjs/toolkit';
import { MOCK_TASKS } from '../../data/mock-tasks';
import { InitialData } from '../../types/initial-data';
import {  NameSpace } from '../../utils/const';

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
  },
});

export const { addTask } = appData.actions;
