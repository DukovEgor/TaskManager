import { createSlice } from '@reduxjs/toolkit';
import { InitialProcess } from '../../types/initial-data';
import { NameSpace } from '../../utils/const';

const initialState: InitialProcess = {
  currentEditing: false,
  currentSortType: 'default',
  currentFilter: 'active',
};

export const appProcess = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    setCurrentEditing: (state, action) => {
      state.currentEditing = action.payload;
    },
    setCurrentSortType: (state, action) => {
      state.currentSortType = action.payload;
    },
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { setCurrentEditing, setCurrentSortType, setCurrentFilter } = appProcess.actions;
