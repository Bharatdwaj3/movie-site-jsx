import axios from "axios"
import { useState } from 'react'
import TopMovie from "../../components/Top/TopMovie"
import TopTV from "../../components/Top/TopTV"
function TopMedia() {
  const [topMovieData, setTopMovieData] = useState([]);
  const [topTVData, setTopTVData] = useState([]);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const Murl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${publicKey}`;

  axios
    .get(Murl)
    .then((response) => {
      setTopMovieData(response.data.results);
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching trending movies:", error);
    });

  const TVurl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${publicKey}`;

  axios
    .get(TVurl)
    .then((response) => {
      setTopTVData(response.data.results);
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching trending TV shows:", error);
    });

  return (
    <>
      <div>
        <div className="bg-slate-600 h-[1000px] w-full">
          <div className="h-56 w-full bg-gradient-to-b from-slate-900 ">
            <h1 className="text-white text-4xl font-serif font-bold text-left ml-2 pt-12 border-b-4 border-white">
              Top Movies
            </h1>
          </div>
          <div className="h-auto  ml-20 mr-12 w-[1200px] ">
            <TopMovie datal={topMovieData} />
          </div>
        </div>
        <div className="bg-slate-600 pt-12  h-[1000px] w-full">
          <div className="h-56 w-full bg-gradient-to-b from-slate-900 ">
            <h1 className="text-white text-4xl font-serif font-bold text-left ml-2 pt-12 border-b-4 border-white">
              Top TV Shows
            </h1>
          </div>
          <div className="h-auto  ml-20 mr-12 w-[1200px]">
            <TopTV datam={topTVData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMedia;
