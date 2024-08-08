function FilterBTN({ name, index, item, setGenre }) {
  return (
    <>
      <style jsx>
        {`
        .x:checked+label {
          background-color: #b5ed7;
          color: white;
        }
        input[type="radio"] {
          display: none;
        }
        `}
      </style>
      <div className="form-check">
        <input
        onKeyUp={() => setGenre(index)}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </>
  );
}

export default FilterBTN;
