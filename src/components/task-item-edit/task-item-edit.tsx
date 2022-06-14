import { nanoid } from 'nanoid';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { INITIAL_TASK } from '../../data/mock-tasks';
import { useAppDispatch } from '../../hooks';
import { addTask } from '../../store/app-data/app-data';
import { setCurrentEditing } from '../../store/app-process/app-process';
import { Task } from '../../types/task';

function TaskItemEdit(): JSX.Element {
  const dispatch = useAppDispatch();
  const { title, color } = INITIAL_TASK;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addTask({ ...data, date: new Date().toISOString(), isArchive: false, id: nanoid(25) }));
  };

  return (
    <article className={`card card--edit card--${color}`}>
      <form className='card__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='card__inner'>
          <div className='card__color-bar'>
            <svg className='card__color-bar-wave' width='100%' height={10}>
              <use xlinkHref='#wave' />
            </svg>
          </div>
          <div className='card__textarea-wrap'>
            <label>
              <textarea
                className='card__text'
                placeholder='Начните что-нибудь писать...'
                defaultValue={title}
                id='edit-textarea'
                {...register('title', {
                  required: true,
                  minLength: 1,
                })}
              />
            </label>
            {errors.title && <p className='error__message'>Длина заголовка должна быть не менее 1 символа</p>}
          </div>
          <div className='card__status-btns'>
            <button className='card__save' type='submit'>
              сохранить
            </button>
            <button className='card__delete' type='button' onClick={() => dispatch(setCurrentEditing(false))}>
              закрыть
            </button>
          </div>
        </div>
      </form>
    </article>
  );
}

export default TaskItemEdit;
