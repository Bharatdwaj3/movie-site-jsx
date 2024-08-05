import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import FilterBTN from "../FilterBtn";


let genre = [
  "Action",
  "Adventure" ,
  "Animation" ,
  "Comedy" ,
  "Crime" ,
  "Documentary" ,
  "Drama" ,
  "Family" ,
  "Fantasy" ,
  "History" ,
  "Horror" ,
  "Music" ,
  "Mystery" ,
  "Romance" ,
  "Science_Fiction" ,
  "TV_Movie",
  "Thriller" ,
  "War" ,
  "Western"
];

function Gener() {

  return (
    <> 
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Genre
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {genre.map((genre) => (
              <FilterBTN
                key={genre}
                name="genre"
                index={genre} 
                item={genre}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gener;
                    