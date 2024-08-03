import axios from "axios";
import { useState} from "react";
import BrowseMovie from "./BrowseMovie";
import Pagination from "../../../helpers/Pagination";

let totalPages;

function FinalMovieBrowse() {

  const [BrowseMovieData, setBrowseMovieData] = useState([]);

  let [pageNumber, setPageNumber]=useState(1);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const Murl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&&page=${pageNumber}&sort_by=popularity.desc&api_key=${publicKey}`;

  axios
    .get(Murl)
    .then((response) => {
      setBrowseMovieData(response.data.results);
      totalPages = response.data.total_pages;
    })
    .catch((error) => {
      console.error("Error fetching trending movies:", error);
    });



  return (
    <>
      <div>
        <div className="bg-slate-600 h-auto w-full">
          <div className="h-56 w-full bg-gradient-to-b from-slate-900 ">
            <h1 className="text-white text-4xl font-serif font-bold text-left ml-2 pt-12 border-b-4 border-white">
              Browse Movies
            </h1>
          </div>
          <div className="h-auto  ml-20 mr-12 w-[1200px] ">
            <BrowseMovie datan={BrowseMovieData} />
          </div>
          <div className="bg-slate-600 w-full h-12"></div>
        </div>
        <div className="bg-slate-600 h-56 w-full">
          <div className="h-56 w-full bg-gradient-to-t from-slate-900">
            <Pagination
            totalPages={totalPages}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalMovieBrowse;
