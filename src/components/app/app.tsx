import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { TASKS_TO_SHOW } from '../../utils/const';
import { getFilteredTasks } from '../../utils/filter';
import { getSortedTasks } from '../../utils/sort';
import Header from '../header/header';
import TaskItemEdit from '../task-item-edit/task-item-edit';
import TaskItem from '../task-item/task-item';

function App(): JSX.Element {
  const { tasks } = useAppSelector(({ data }) => data);
  const { currentEditing, currentSortType, currentFilter } = useAppSelector(({ process }) => process);

  const [toShowCount, setToShowCount] = useState(TASKS_TO_SHOW);

  const filteredTasks = getFilteredTasks(tasks.slice(), currentFilter);
  const sortedTasks = getSortedTasks(filteredTasks, currentSortType);

  return (
    <>
      <Header tasks={tasks} currentSortType={currentSortType} currentFilter={currentFilter} />
      <main className='main'>
        <section className='board container'>
          <div className='board__tasks'>
            {currentEditing && <TaskItemEdit key={nanoid()} />}
            {sortedTasks.slice(0, toShowCount).map(({ id, ...rest }) => (
              <TaskItem key={nanoid()} task={{ ...rest, id }} />
            ))}
          </div>
          {!(toShowCount >= filteredTasks.length) && (
            <button
              className='load-more'
              type='button'
              onClick={() => {
                setToShowCount((prev) => prev + TASKS_TO_SHOW);
              }}
            >
              ПОКАЗАТЬ БОЛЬШЕ
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
