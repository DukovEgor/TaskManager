import { useAppDispatch } from '../../hooks';
import { setTaskActive, setTaskArchive } from '../../store/app-data/app-data';
import { Task } from '../../types/task';
import { formatDate } from '../../utils/format-date';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps): JSX.Element {
  const { title, date, isArchive, id } = task;
  const dispatch = useAppDispatch();
  const taskDate = formatDate(date);

  return (
    <article key={`${id}card`} className={`card card--black ${isArchive && 'card--repeat'}`}>
      <div className='card__form'>
        <div className='card__inner'>
          <div className='card__control'>
            {!isArchive && (
              <button type='button' className='card__btn card__btn--archive' onClick={() => dispatch(setTaskArchive(id))}>
                Завершить
              </button>
            )}
            {isArchive && (
              <button type='button' className='card__btn card__btn--archive' onClick={() => dispatch(setTaskActive(id))}>
                Возобновить
              </button>
            )}
          </div>

          <div className='card__color-bar'>
            <svg className='card__color-bar-wave' width='100%' height={10}>
              <use xlinkHref='#wave' />
            </svg>
          </div>
          <div className='card__textarea-wrap'>
            <p className='card__text'>{title}</p>
          </div>
          <div className='card__settings'>
            <div className='card__details'>
              <div className='card__dates'>
                <div className='card__date-deadline'>
                  <p className='card__input-deadline-wrap card__date'>{taskDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskItem;
