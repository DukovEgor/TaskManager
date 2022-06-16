import { InitialProcess } from '../../types/initial-data';
import { appProcess, setCurrentEditing, setCurrentFilter, setCurrentSortType } from './app-process';

describe('Reducer: appProcess', () => {
  const state: InitialProcess = {
    currentEditing: false,
    currentSortType: 'default',
    currentFilter: 'active',
  };

  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  it('should set currentEditing: true when dispatch(setCurrentEditing(true))', () => {
    expect(appProcess.reducer(state, setCurrentEditing(true))).toEqual({ ...state, currentEditing: true });
  });

  it('should set currentEditing: false when dispatch(setCurrentEditing(false))', () => {
    const currentState: InitialProcess = {
      currentEditing: true,
      currentSortType: 'default',
      currentFilter: 'active',
    };
    expect(appProcess.reducer(currentState, setCurrentEditing(false))).toEqual({ ...currentState, currentEditing: false });
  });

  it('should set currentSortType: value when dispatch(setCurrentSortType(value))', () => {
    expect(appProcess.reducer(state, setCurrentSortType('something'))).toEqual({ ...state, currentSortType: 'something' });
  });

  it('should set currentFilter: value when dispatch(setCurrentFilter(value))', () => {
    expect(appProcess.reducer(state, setCurrentFilter('something'))).toEqual({ ...state, currentFilter: 'something' });
  });
});
