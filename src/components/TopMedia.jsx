import axios from "axios"
import { useState,useEffect } from 'react'
import MediaCard from "../helpers/MediaCard";

function TopMedia() {
  const [trendMovie, settrendMovie] = useState([]);
  const [trendTV, settrendTV] = useState([]);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;


useEffect(() => {
    async function fetchTrendingMovies() {
        try {
            const Murl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${publicKey}`;
            const response = await axios.get(Murl);
            settrendMovie(response.data.results);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    }

    fetchTrendingMovies();
}, [publicKey]);

useEffect(() => {
    async function fetchTrendingTVShows() {
        try {
            const TVurl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${publicKey}`;
            const response = await axios.get(TVurl);
            settrendTV(response.data.results);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching trending TV shows:", error);
        }
    }

    fetchTrendingTVShows();
}, [publicKey]);

  return (
    <>
      
       
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            style={{
              background: "radial-gradient(blue, gray)",
              height: "960px",
              width: "1260px",
              marginBottom: "90px",
            }}
          >
            <div className="pt-5">
              <div
                style={{
                  marginBottom: "90px",
                  height: "90px",
                  width: "500px",
                  borderBottom: "12px solid black",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h1
                  style={{
                    fontFamily: "sans",
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "black",
                  }}
                >
                  Movies :
                </h1>
              </div>
              <div className="container">
                <div className="row">
                  <MediaCard
                    data={trendMovie}
                    page="/discover/movies/"
                    columns={6}
                    limit={12}
                    customStyles={{
                      outerDiv: { height: "250px", marginTop: "2px" },
                      imageWrapper: { height: "200px" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            style={{
              background: "radial-gradient(blue, gray)",
              height: "960px",
              width: "1260px",
              marginBottom: "90px",
            }}
          >
            <div className="pt-5">
              <div
                style={{
                  marginBottom: "90px",
                  height: "90px",
                  width: "500px",
                  borderBottom: "12px solid black",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h1
                  style={{
                    fontFamily: "sans",
                    textAlign: "center",
                    paddingTop: "20px",
                    color: "black",
                  }}
                >
                  TV Shows :
                </h1>
              </div>
              <div className="container">
                <div className="row">
                  <MediaCard
                    data={trendTV}
                    page="/discover/tv_shows/"
                    columns={6}
                    limit={12}
                    customStyles={{
                      outerDiv: { height: "250px", marginTop: "2px" },
                      imageWrapper: { height: "200px" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMedia;
