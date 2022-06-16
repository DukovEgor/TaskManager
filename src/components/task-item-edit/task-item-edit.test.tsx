import { Action } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { TEST_TASKS } from '../../mocks/test-tasks';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItemEdit from './task-item-edit';

const mockStore = configureMockStore<State, Action>();
const store = mockStore({
  data: { tasks: TEST_TASKS },
  process: {
    currentEditing: false,
    currentSortType: 'default',
    currentFilter: 'all',
  },
});

const fakeApp = (
  <Provider store={store}>
    <TaskItemEdit />
  </Provider>
);

describe('Application', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/сохранить/i)).toBeInTheDocument();
    expect(screen.getByText(/закрыть/i)).toBeInTheDocument();
  });

  it('should render error message after user click submit button if textare is empty', async () => {
    render(fakeApp);

    const user = userEvent.setup();

    await user.click(screen.getByText(/сохранить/i));

    expect(screen.getByText(/Длина заголовка должна быть не менее 1 символа/i)).toBeInTheDocument();
  });

  it('should not render error message after user click submit button because textare is not empty and should dispatch an action', async () => {
    render(fakeApp);

    const user = userEvent.setup();

    await user.type(screen.getByRole('textbox'), 'testTitle');
    await user.click(screen.getByText(/сохранить/i));

    expect(screen.queryByText(/Длина заголовка должна быть не менее 1 символа/i)).not.toBeInTheDocument();

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain('data/addTask');
  });
});
