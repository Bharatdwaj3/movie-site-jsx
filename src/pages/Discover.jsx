import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Link } from "react-router-dom";
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
              <DiscoverShow set={discover} />
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

const DiscoverShow = ({ set }) => {
  return (
    <>
      {set.slice(0, 4).map((trend) => (
        <div key={trend.id} className="col-3 mb-5">
          <div className="">
            <div
              style={{
                height: "350px",
                width: "100%",
                backgroundColor: "gray",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "blue",
                  height: "300px",
                  width: "100%",
                  position: "absolute",
                  top: "0",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />
                <div
                  style={{
                    backgroundColor: "transparent",
                    height: "100%",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    position: "absolute",
                    top: "0",
                  }}
                >
                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "sans",
                      backdropFilter: "blur(2px)",
                      marginTop: "0",
                      position: "absolute",
                      top: "19",
                      right: "0",
                      marginRight: "12",
                    }}
                  >
                    {trend.original_language.toUpperCase()}
                  </h1>

                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "mono",
                      backdropFilter: "blur(2px)",
                      marginTop: "24px",
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                    }}
                  >
                    {new Date(trend.release_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h1>
                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "mono",
                      backdropFilter: "blur(2px)",
                      marginTop: "24px",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      marginRight: "12",
                    }}
                  >
                    {trend.vote_average.toFixed(1)}
                  </h1>
                </div>
              </div>
              <div
                style={{
                  marginTop: "290px",
                  height: "62px",
                  width: "100%",
                  backgroundColor: "black",
                  position: "absolute",
                  opacity: "0.5",
                }}
              >
                <h1
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    fontFamily: "serif",
                    backdropFilter: "blur(2px)",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  {trend.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Discover;
