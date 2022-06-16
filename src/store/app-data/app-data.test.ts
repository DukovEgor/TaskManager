import { nanoid } from '@reduxjs/toolkit';
import { MOCK_TASKS } from '../../data/mock-tasks';
import { TEST_TASKS } from '../../mocks/test-tasks';
import { InitialData } from '../../types/initial-data';
import { getRandomDate } from '../../utils/random-date';
import { addTask, appData, clearArchive, setTaskActive, setTaskArchive } from './app-data';

describe('Reducer: appData', () => {
  const state: InitialData = {
    tasks: TEST_TASKS,
  };

  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({ tasks: MOCK_TASKS });
  });

  it('should add new Task when dispatch(addTask)', () => {
    const newTask = {
      title: 'Unit-tests',
      date: getRandomDate(),
      isArchive: true,
      id: nanoid(),
    };

    expect(appData.reducer(state, addTask(newTask))).toEqual({ tasks: [...state.tasks, newTask] });
  });

  it('should set isArchive=false in exact Task when dispatch(setTaskActive)', () => {
    const taskId = TEST_TASKS[0].id;
    const [firstTask, ...rest] = TEST_TASKS;
    const modifiedTask = { ...firstTask, isArchive: false };

    expect(appData.reducer(state, setTaskActive(taskId))).toEqual({ tasks: [modifiedTask, ...rest] });
  });

  it('should set isArchive=true in exact Task when dispatch(setTaskArchive)', () => {
    const taskId = TEST_TASKS[1].id;
    const [firstTask, secondTask, ...rest] = TEST_TASKS;
    const modifiedTask = { ...secondTask, isArchive: true };

    expect(appData.reducer(state, setTaskArchive(taskId))).toEqual({ tasks: [firstTask, modifiedTask, ...rest] });
  });

  it('should clear all archive tasks from state', () => {
    const filteredTasks = state.tasks.slice().filter((task) => !task.isArchive);
    expect(appData.reducer(state, clearArchive())).toEqual({ tasks: filteredTasks });
  });
});
