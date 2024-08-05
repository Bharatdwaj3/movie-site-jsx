import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from './Cards';
import Pagination from "./../helpers/Pagination";
import Filter from "./Filter";

function Soda() {
  const [BrowseMovieData, setBrowseMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
const[genre,setGenre]=useState([])
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&with_genres=${genre}
                  &sort_by=popularity.desc&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setBrowseMovieData(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [pageNumber,genre, publicKey]); 

  return (
    <>
      <div className="bg-red-800 w-full h-20">
        <h1 className="text-center text-5xl font-ubuntu py-4">
          Rick and Morty <span className="text-primary">Wiki</span>
        </h1>
      </div>

      <div className="py-56">
        <div className="container">
          <div className="row">
            <Filter serGenre={setGenre}/>
            <div className="col-9">
              <div className="row">
                <Cards data={BrowseMovieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-danger w-100 h-56 d-flex align-items-center justify-content-center">
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}

export default Soda;
