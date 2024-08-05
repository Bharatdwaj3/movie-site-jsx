import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import FilterBTN from "../FilterBtn";


const genreIdMapping = {
  "Action": 28,
  "Adventure": 12,
  "Animation": 16,
  "Comedy": 35,
  "Crime": 80,
  "Documentary": 99,
  "Drama": 18,
  "Family": 10751,
  "Fantasy": 14,
  "History": 36,
  "Horror": 27,
  "Music": 10402,
  "Mystery": 9648,
  "Romance": 10749,
  "Science_Fiction": 878,
  "TV_Movie": 10770,
  "Thriller": 53,
  "War": 10752,
  "Western": 37
};

function Gener(setGenre) {
  const genres = Object.keys(genreIdMapping); // Get genre names from the mapping

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
            {genres.map((genre) => (
              <FilterBTN 
              task={setGenre}
                key={genreIdMapping[genre]} 
                name="genre" 
                index={genreIdMapping[genre]} 
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
