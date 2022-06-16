import { Action, nanoid } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { TEST_TASKS } from '../../mocks/test-tasks';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from './task-item';
import { getRandomDate } from '../../utils/random-date';

const mockStore = configureMockStore<State, Action>();
const store = mockStore({
  data: { tasks: TEST_TASKS },
  process: {
    currentEditing: false,
    currentSortType: 'default',
    currentFilter: 'all',
  },
});

describe('Application', () => {
  it('should render correctly', () => {
    const testTaks = {
      title: 'Example task',
      date: getRandomDate(),
      isArchive: true,
      id: nanoid(),
    };

    render(
      <Provider store={store}>
        <TaskItem task={testTaks} />
      </Provider>
    );

    expect(screen.getByText(testTaks.title)).toBeInTheDocument();
  });

  it('should render "Завершить" when task in props with isArchive = false parameter', () => {
    const testTaks = {
      title: 'Example task',
      date: getRandomDate(),
      isArchive: false,
      id: nanoid(),
    };

    render(
      <Provider store={store}>
        <TaskItem task={testTaks} />
      </Provider>
    );

    expect(screen.getByTestId('to-archive')).toBeInTheDocument();
    expect(screen.queryByTestId('to-active')).not.toBeInTheDocument();
  });

  it('should render "Возобновить" when task in props with isArchive = true parameter', () => {
    const testTaks = {
      title: 'Example task',
      date: getRandomDate(),
      isArchive: true,
      id: nanoid(),
    };

    render(
      <Provider store={store}>
        <TaskItem task={testTaks} />
      </Provider>
    );

    expect(screen.queryByTestId('to-archive')).not.toBeInTheDocument();
    expect(screen.getByTestId('to-active')).toBeInTheDocument();
  });

  it('should should dispatch an action when user click "Возобновить" button', async () => {
    const testTaks = {
      title: 'Example task',
      date: getRandomDate(),
      isArchive: true,
      id: nanoid(),
    };

    render(
      <Provider store={store}>
        <TaskItem task={testTaks} />
      </Provider>
    );

    const user = userEvent.setup();

    await user.click(screen.getByTestId('to-active'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain('data/setTaskActive');
  });
});
