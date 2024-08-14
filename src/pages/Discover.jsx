import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Link } from "react-router-dom";
import MovieCards from "../helpers/MovieCards";
function Discover() {
  const [discover, setDiscover] = useState([]);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setDiscover(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [publicKey]);

  return (
    <div className="pt-5">
      <div className="container text-justify">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <MovieCards 
                data={discover}
                pages="/discover/movies/"
                columns={4}
                limit={4}
                customStyles={{
                }} />
              <Link to="/discover/movies">
                <button>Go to Movies</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Discover;
