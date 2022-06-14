import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { TASKS_TO_SHOW } from '../../utils/const';
import Header from '../header/header';
import TaskItem from '../task-item/task-item';

function App(): JSX.Element {
  const {tasks} = useAppSelector(({data})=> data);
  const [toShowCount, setToShowCount] = useState(TASKS_TO_SHOW);

  return (
    <>
      <Header/>
      <main className="main">
        <section className="board container">
          <div className="board__tasks">
            {tasks.slice(0, toShowCount).map(({id, ...rest}) => <TaskItem key={id} task={{...rest, id}}/>)}
          </div>
          {!(toShowCount >= tasks.length) &&
          <button className="load-more" type="button" onClick={() => {
            setToShowCount((prev) => prev + TASKS_TO_SHOW);
          }}
          >ПОКАЗАТЬ БОЛЬШЕ
          </button>}
        </section>
      </main>
    </>
  );
}

export default App;
