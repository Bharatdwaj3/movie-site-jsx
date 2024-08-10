import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import TVCards from './TVCards';
import NavBar from '../helpers/NavBar'
import MovieCards from './MovieCards'
import Pagination from "../helpers/Pagination";
import Filter from "../helpers/Filter";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function DiscoverMedia (){
  return(
    <Router>
      <div className="DiscoverMedia">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/tv_shows" element={<TV_Shows/>}/>
      </Routes>
    </Router>
  )
}


const Movies=()=> {
  const [BrowseMovieData, setBrowseMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genre,setGenre]=useState([])
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
      
       
      </div>

      <div className="py-56">
        <div className="container">
          <div className="row">
            <Filter setGenre={setGenre}/>
            <div className="col-9">
              <div className="row">
                <MovieCards data={BrowseMovieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '190px' ,background: "linear-gradient(to bottom, white, black)", }}className="bg-danger w-100 d-flex align-items-center justify-content-center">
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}


const TV_Shows=()=> {
  const [BrowseTVData, setBrowseTVData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genre,setGenre]=useState([])
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&with_genres=${genre}
                  &sort_by=popularity.desc&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setBrowseTVData(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [pageNumber,genre, publicKey]); 

  return (
    <>
      <div className="bg-red-800 w-full h-20"></div>

      <div className="py-56">
        <div className="container">
          <div className="row">
            <Filter setGenre={setGenre} />
            <div className="col-9">
              <div className="row">
                <TVCards datal={BrowseTVData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "190px",
          background: "linear-gradient(to bottom, white, black)",
        }}
        className="w-100 d-flex align-items-center justify-content-center"
      >
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}

export default DiscoverMedia;
