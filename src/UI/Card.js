const Card = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <label className="card__category">{props.category}</label>
        <h2 className="card__term">{props.term}</h2>
        <span className="card__definition">{props.definition}</span>
      </div>
      <button
        type="button"
        className="card__btn"
        onClick={props.deleteTaskHandler}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
