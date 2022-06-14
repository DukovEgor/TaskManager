import { useAppDispatch } from '../../hooks';
import { setCurrentEditing } from '../../store/app-process/app-process';

function TaskItemEdit(): JSX.Element {
  const dispatch = useAppDispatch();


  return (
    <article className="card card--edit card--yellow card--repeat">
      <form className="card__form" method="get">
        <div className="card__inner">
          <div className="card__color-bar">
            <svg className="card__color-bar-wave" width="100%" height={10}>
              <use xlinkHref="#wave" />
            </svg>
          </div>
          <div className="card__textarea-wrap">
            <label>
              <textarea className="card__text" placeholder="Start typing your text here..." name="text" defaultValue={'This is example of task edit. You can set date and chose repeating days and color.'} />
            </label>
          </div>
          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <button className="card__date-deadline-toggle" type="button">
              date: <span className="card__date-status">yes</span>
                </button>
                <fieldset className="card__date-deadline">
                  <label className="card__input-deadline-wrap">
                    <input className="card__date" type="text" name="date" defaultValue="23 September 16:15" />
                  </label>
                </fieldset>
                <button className="card__repeat-toggle" type="button">
              repeat:<span className="card__repeat-status">yes</span>
                </button>
              </div>
            </div>
            <div className="card__colors-inner">
              <h3 className="card__colors-title">Color</h3>
              <div className="card__colors-wrap">
                <input type="radio" id="color-black-4" className="card__color-input card__color-input--black visually-hidden" name="color" defaultValue="black" />
                <label htmlFor="color-black-4" className="card__color card__color--black">black</label>
                <input type="radio" id="color-yellow-4" className="card__color-input card__color-input--yellow visually-hidden" name="color" defaultValue="yellow" defaultChecked />
                <label htmlFor="color-yellow-4" className="card__color card__color--yellow">yellow</label>
                <input type="radio" id="color-blue-4" className="card__color-input card__color-input--blue visually-hidden" name="color" defaultValue="blue" />
                <label htmlFor="color-blue-4" className="card__color card__color--blue">blue</label>
                <input type="radio" id="color-green-4" className="card__color-input card__color-input--green visually-hidden" name="color" defaultValue="green" />
                <label htmlFor="color-green-4" className="card__color card__color--green">green</label>
                <input type="radio" id="color-pink-4" className="card__color-input card__color-input--pink visually-hidden" name="color" defaultValue="pink" />
                <label htmlFor="color-pink-4" className="card__color card__color--pink">pink</label>
              </div>
            </div>
          </div>
          <div className="card__status-btns">
            <button className="card__save" type="submit" onClick={() => dispatch(setCurrentEditing(''))}>save</button>
            <button className="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>

  );
}

export default TaskItemEdit;
