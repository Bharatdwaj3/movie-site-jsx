import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import MediaCard from './../helpers/MediaCard';
import { Routes, Route } from 'react-router-dom';
import Search from '../components/Search'


function DiscoverMedia (){
  return(
    <div className="DiscoverMedia">
      
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv_shows" element={<TV_Shows />} />
      </Routes>
    </div>
  )
}

const Movies=()=> {
  const [BrowseMovieData, setBrowseMovieData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genre,setGenre]=useState([])
  const [search, setSearch] = useState("")
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
   let url;
  if(search){
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${publicKey}`;
  } else  { 
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&with_genres=${genre}&sort_by=popularity.desc&api_key=${publicKey}`;
  }
    axios
      .get(url)
      .then((response) => {
        setBrowseMovieData(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [pageNumber,genre,search, publicKey]); 

  return (
    <>


      <div className="py-56">
        <Search setSearch={setSearch}/>
        <div className="container">
          <div className="row">
            <Filter setGenre={setGenre}/>
            <div className="col-9">
              <div className="row">
                <MediaCard
                  data={BrowseMovieData}
                  pages="/discover/movies/"
                  columns={4}
                  limit={Infinity}
                  customStyles={{}}
                />

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
  const [search, setSearch] = useState("")

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;



  useEffect(() => {
    let tvurl;
     
    if(search){
      tvurl = `https://api.themoviedb.org/3/search/tv?query=${search}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${publicKey}`;
        }else{
      
      tvurl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&with_genres=${genre}&sort_by=popularity.desc&api_key=${publicKey}`;

    }
    axios
      .get(tvurl)
      .then((response) => {
        setBrowseTVData(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [pageNumber,genre,search, publicKey]); 

  return (
    <>
     

      <div className="py-56">
        <Search setSearch={setSearch} />
        <div className="container">
          <div className="row">
            <Filter setGenre={setGenre} />
            <div className="col-9">
              <div className="row">
              <MediaCard
                  data={BrowseTVData}
                  page="/discover/tv_shows/"
                  columns={4}
                  limit={Infinity}
                  customStyles={{}}
                />
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
