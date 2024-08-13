import { useState } from "react";
import axios from "axios";
import SearchMovie from './SearchMovie'
import TrendingMovie from "./Top/TopMovie";
function Boss() {
  const [movieData, setMovieData] = useState([]);
  const [SearchName, setSearchName] = useState("");

 
  const [trendingMovieData, setTrendingData] = useState([]);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const getMovieData = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.themoviedb.org/3/search/multi?query=${SearchName}&include_adult=false&language=en-US&page=1&api_key=${publicKey}`;

      axios
        .get(url)
        .then((response) => {
          setMovieData(response.data.results);
          console.log(response.data);
        })

      setSearchName("");
    }
  };

   const getTrendingMovies = () => {
     const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${publicKey}`;

     axios.get(url).then((response) => {
       setTrendingData(response.data.results);
       console.log(response.data);
     });
   };
  
  return (
    <>
      <div>
        <div className="bg-slate-700 w-full h-96 relative">
          <input
            className="p-[2.5rem] bg-white w-96 h-[20px] absolute inset-x-56 bottom-56 rounded-xl"
            placeholder="Movie..."
            type="text"
            value={SearchName}
            onChange={(event) => setSearchName(event.target.value)}
            onKeyUp={getMovieData}
          />

          <button
            className="bg-slate-100 h-12 w-36"
            onClick={getTrendingMovies}
          ></button>
        </div>
        <div className="bg-gradient-to-b from-slate-700 to-lime-900 w-full h-auto">
          <div className="ml-20 mr-12 w-[1200px] h-auto">
            <SearchMovie data={movieData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Boss;
