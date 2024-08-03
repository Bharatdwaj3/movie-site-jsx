import { useState } from "react";
import axios from "axios";

function MovieTopRated() {
  const [movieData, setMovieData] = useState([]);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const getMovieData = () => {
    const url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${publicKey}`;

    axios.get(url).then((response) => {
      setMovieData(response.data.results);
      console.log(response.data);
    });
  };
  return (
    <>
      <div>
        <div className="bg-sky-600 h-96 w-full">
          <button
            className="bg-slate-900 h-12 w-36"
            onClick={getMovieData}
          ></button>
        </div>
        <div className="w-full h-auto grid grid-cols-3 place-content-center grid-rows-2 grid-flow-row gap-1 justify-between">
          {movieData.slice(0, 9).map((iter) => (
            <div
              key={iter.id}
              className="bg-lime-800 w-full h-36 flex flex-row"
            >
              <div
                className="bg-orange-500 w-56 h-full"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${iter.poster_path}`}
                  alt=""
                />
              </div>
              <div className="bg-purple-500 w-full h-full relative">
                <div className="h-1/2 w-full bg-green-900 absolute top-0">
                  <h1 className="text-center font-bold font-sans text-lg ml-5">
                    {iter.name}
                  </h1>
                </div>
                <div className="h-1/2 w-full bg-green-800 absolute bottom-0">
                  <h1 className="text-left font-light font-sans text-lg ml-5">
                    Aired:{iter.first_air_date}
                    <br />
                    Origin:{iter.origin_country}
                  </h1>
                </div>
              </div>
              <div className="bg-red-700 w-56 h-full"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieTopRated;
