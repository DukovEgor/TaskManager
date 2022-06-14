import { createSlice } from '@reduxjs/toolkit';
import { InitialProcess } from '../../types/initial-data';
import {  NameSpace } from '../../utils/const';

const initialState: InitialProcess = {
  currentEditing: '',
};

export const appProcess = createSlice({
  name: NameSpace.Process,
  initialState,
  reducers: {
    setCurrentEditing: (state, action) => {
      state.currentEditing = action.payload;
    },
  },
});

export const { setCurrentEditing } = appProcess.actions;
