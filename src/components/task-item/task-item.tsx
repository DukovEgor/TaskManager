import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentEditing } from '../../store/app-process/app-process';
import { Task } from '../../types/task';
import TaskItemEdit from '../task-item-edit/task-item-edit';

interface TaskItemProps {
  task: Task,
}

function TaskItem({task}: TaskItemProps): JSX.Element {
  const {title, color, date, isArchive, id} = task;
  const {currentEditing} = useAppSelector(({process}) => process);
  const dispatch = useAppDispatch();


  return (
    currentEditing === id ? <TaskItemEdit key={`${id  }edit`} task={task}/> :
      <article key={`${id  }card`} className={`card card--${color} ${isArchive && 'card--repeat'}`}>
        <div className="card__form">
          <div className="card__inner">
            <div className="card__control">
              <button type="button" className="card__btn card__btn--edit" onClick={() => dispatch(setCurrentEditing(id))}>
              Редактировать
              </button>
              <button type="button" className="card__btn card__btn--archive">
              Архив
              </button>
            </div>
            <div className="card__color-bar">
              <svg className="card__color-bar-wave" width="100%" height={10}>
                <use xlinkHref="#wave" />
              </svg>
            </div>
            <div className="card__textarea-wrap">
              <p className="card__text">{title}</p>
            </div>
            <div className="card__settings">
              <div className="card__details">
                <div className="card__dates">
                  <div className="card__date-deadline">
                    <p className="card__input-deadline-wrap card__date">{date}
                    </p>
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
