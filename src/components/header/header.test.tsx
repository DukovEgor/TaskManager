import { Action } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { TEST_TASKS } from '../../mocks/test-tasks';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Header from './header';
import userEvent from '@testing-library/user-event';

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
    <Header tasks={TEST_TASKS} currentSortType={'default'} currentFilter={'all'} />
  </Provider>
);

describe('Application', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/ТАСКМЕНЕДЖЕР/i)).toBeInTheDocument();
    expect(screen.getByText(/ДОБАВИТЬ ЗАДАЧУ/i)).toBeInTheDocument();
    expect(screen.getByText(/УДАЛИТЬ ЗАВЕРШЕННЫЕ/i)).toBeInTheDocument();
    expect(screen.getByText(/ЗАДАЧИ/i)).toBeInTheDocument();
    expect(screen.getByText(/ВСЕ/i)).toBeInTheDocument();
    expect(screen.getByText(/АКТИВНЫЕ/i)).toBeInTheDocument();
    expect(screen.getByText('ЗАВЕРШЕННЫЕ')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should dispatch an process/action when user click the button', async () => {
    render(fakeApp);
    const user = userEvent.setup();

    await user.click(screen.getByText(/ДОБАВИТЬ ЗАДАЧУ/i));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain('process/setCurrentEditing');
  });

  it('should dispatch an data/action when user click the button', async () => {
    render(fakeApp);
    const user = userEvent.setup();

    await user.click(screen.getByText(/УДАЛИТЬ ЗАВЕРШЕННЫЕ/i));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain('data/clearArchive');
  });
});
