import { Action } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { TEST_TASKS } from '../../mocks/test-tasks';
import { Provider } from 'react-redux';
import App from './app';
import { render, screen } from '@testing-library/react';
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
    <App />
  </Provider>
);

describe('Header', () => {
  it('should render "show more button" correctly when tasks.length > 4', () => {
    render(fakeApp);

    expect(screen.getByText(/ПОКАЗАТЬ БОЛЬШЕ/i)).toBeInTheDocument();
  });

  it('should not render "show more button" when all the tasks has already shown', async () => {
    render(fakeApp);

    const user = userEvent.setup();

    await user.click(screen.getByText(/ПОКАЗАТЬ БОЛЬШЕ/i));

    expect(screen.queryByText(/ПОКАЗАТЬ БОЛЬШЕ/i)).not.toBeInTheDocument();
  });
});
