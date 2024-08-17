import '../styles/style.css';

function FilterBtn({ name, index, item, setGenre }) {
  return (
    <div className="form-check">
      <input
        onClick={() => setGenre(index)}
        className="form-check-input"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
        {item}
      </label>
    </div>
  );
}

export default FilterBtn;
