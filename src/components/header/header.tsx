function Header() {
  return (
    <header className="header">
      <section className="main__control control container">
        <h1 className="control__title">ТАСКМЕНЕДЖЕР</h1>
        <section className="control__btn-wrap">
          <input type="radio" name="control" id="control__new-task" className="control__input visually-hidden" />
          <button className="control__label control__label--new-task">+ ДОБАВИТЬ ЗАДАЧУ</button>
          <input type="radio" name="control" id="control__task" className="control__input visually-hidden" defaultChecked />
          <label htmlFor="control__task" className="control__label">ЗАДАЧИ</label>
        </section>
      </section>
      <form>
        <section className="main__filter filter container">
          <input type="radio" id="filter__all" className="filter__input visually-hidden" name="filter" defaultChecked />
          <label htmlFor="filter__all" className="filter__label">
            ВСЕ <span className="filter__all-count">13</span>
          </label>
          <input type="radio" id="filter__favorites" className="filter__input visually-hidden" name="filter" />
          <label htmlFor="filter__favorites" className="filter__label">АКТИВНЫЕ <span className="filter__favorites-count">1</span></label>
          <input type="radio" id="filter__archive" className="filter__input visually-hidden" name="filter" />
          <label htmlFor="filter__archive" className="filter__label">ЗАВЕРШЕННЫЕ <span className="filter__archive-count">115</span></label>
        </section>
      </form>
      <form>
        <section>
          <div className="main__filter sort container board__sort-list">
            <input type="radio" id="sort-default" className="filter__input visually-hidden" name="filter" />
            <label htmlFor="sort-default" className="filter__label">ПО УМОЛЧАНИЮ</label>
            <input type="radio" id="sort-date-up" className="filter__input visually-hidden" name="filter" />
            <label htmlFor="sort-date-up" className="filter__label">ПО ДАТЕ (вниз)</label>
            <input type="radio" id="sort-date-down" className="filter__input visually-hidden" name="filter" />
            <label htmlFor="sort-date-down" className="filter__label">ПО ДАТЕ (вверх)</label>
          </div>
        </section>
      </form>
    </header>
  );
}

export default Header;
