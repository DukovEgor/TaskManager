import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks';
import { setCurrentEditing } from '../../store/app-process/app-process';
import { Task } from '../../types/task';
import { COLORS } from '../../utils/const';

interface TaskItemEditProps {
  task: Task,
}

function TaskItemEdit({task}:TaskItemEditProps ): JSX.Element {
  const {color, isArchive, title, date, id} = task;
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<Task>({ mode: 'onSubmit' });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };


  return (
    <article className={`card card--edit card--${color} ${isArchive && 'card--repeat'}`}>
      <form className="card__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="card__inner">
          <div className="card__color-bar">
            <svg className="card__color-bar-wave" width="100%" height={10}>
              <use xlinkHref="#wave" />
            </svg>
          </div>
          <div className="card__textarea-wrap">
            <label>
              <textarea className="card__text" placeholder="Start typing your text here..." defaultValue={title} id='edit-textarea' {...register('title', {
                required: true,
              })}
              />
            </label>
          </div>
          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <fieldset className="card__date-deadline">
                  <label className="card__input-deadline-wrap">
                    <input className="card__date" type="text" name="date" defaultValue={date} />
                  </label>
                </fieldset>
                <button className="card__repeat-toggle" type="button">
              архив:<span className="card__repeat-status">{ isArchive ? 'да' : 'нет'}</span>
                </button>
              </div>
            </div>
            <div className="card__colors-inner">
              <h3 className="card__colors-title">Color</h3>
              <div className="card__colors-wrap">
                {COLORS.map((col) => (
                  <div key={id + col}>
                    <input type="radio" id={`color-${col}-${id}`} className={`card__color-input card__color-input--${col} visually-hidden`} defaultValue={col} {...register('color')}/>
                    <label htmlFor={`color-${col}-${id}`} className={`card__color card__color--${col}`}>{col}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card__status-btns">
            <button className="card__save" type="submit" onClick={() => dispatch(setCurrentEditing('0'))}>save</button>
            <button className="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>

  );
}

export default TaskItemEdit;
