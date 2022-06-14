import { useAppDispatch } from '../../hooks';
import { setCurrentEditing, setCurrentFilter, setCurrentSortType } from '../../store/app-process/app-process';
import { Task } from '../../types/task';
import { getFilteredTasks } from '../../utils/filter';

interface HeaderProps {
  tasks: Task[];
  currentSortType: string;
  currentFilter: string;
}

function Header({ tasks, currentSortType, currentFilter }: HeaderProps) {
  const dispatch = useAppDispatch();

  const allTasksLength = getFilteredTasks(tasks, 'all').length;
  const activeTasksLength = getFilteredTasks(tasks, 'active').length;
  const archiveTasksLength = getFilteredTasks(tasks, 'archive').length;

  return (
    <header className='header'>
      <section className='main__control control container'>
        <h1 className='control__title'>ТАСКМЕНЕДЖЕР</h1>
        <section className='control__btn-wrap'>
          <input type='radio' name='control' id='control__new-task' className='control__input visually-hidden' />
          <button className='control__label control__label--new-task' onClick={() => dispatch(setCurrentEditing(true))}>
            + ДОБАВИТЬ ЗАДАЧУ
          </button>
          <input type='radio' name='control' id='control__task' className='control__input visually-hidden' defaultChecked />
          <label htmlFor='control__task' className='control__label'>
            ЗАДАЧИ
          </label>
        </section>
      </section>
      <form>
        <section className='main__filter filter container'>
          <input type='radio' id='filter__all' className='filter__input visually-hidden' name='filter' defaultChecked={currentFilter === 'all'} />
          <label htmlFor='filter__all' className='filter__label' onClick={() => dispatch(setCurrentFilter('all'))}>
            ВСЕ <span className='filter__all-count'>{allTasksLength}</span>
          </label>
          <input type='radio' id='filter__favorites' className='filter__input visually-hidden' name='filter' defaultChecked={currentFilter === 'active'} />
          <label htmlFor='filter__favorites' className='filter__label' onClick={() => dispatch(setCurrentFilter('active'))}>
            АКТИВНЫЕ <span className='filter__favorites-count'>{activeTasksLength}</span>
          </label>
          <input type='radio' id='filter__archive' className='filter__input visually-hidden' name='filter' defaultChecked={currentFilter === 'archive'} />
          <label htmlFor='filter__archive' className='filter__label' onClick={() => dispatch(setCurrentFilter('archive'))}>
            ЗАВЕРШЕННЫЕ <span className='filter__archive-count'>{archiveTasksLength}</span>
          </label>
        </section>
      </form>
      <form>
        <section>
          <div className='main__filter sort container board__sort-list'>
            <input type='radio' id='sort-default' className='filter__input visually-hidden' name='filter' defaultChecked={currentSortType === 'default'} />
            <label htmlFor='sort-default' className='filter__label' onClick={() => dispatch(setCurrentSortType('default'))}>
              ПО УМОЛЧАНИЮ
            </label>
            <input type='radio' id='sort-date-up' className='filter__input visually-hidden' name='filter' defaultChecked={currentSortType === 'dateUp'} />
            <label htmlFor='sort-date-up' className='filter__label' onClick={() => dispatch(setCurrentSortType('dateUp'))}>
              ПО ДАТЕ (вниз)
            </label>
            <input type='radio' id='sort-date-down' className='filter__input visually-hidden' name='filter' defaultChecked={currentSortType === 'dateDown'} />
            <label htmlFor='sort-date-down' className='filter__label' onClick={() => dispatch(setCurrentSortType('dateDown'))}>
              ПО ДАТЕ (вверх)
            </label>
          </div>
        </section>
      </form>
    </header>
  );
}

export default Header;
