import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

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
      {set.slice(0,4).map((trend) =>(
      <div key={trend.id} className="col-3 mb-5">
      <div className="">
        <div className="bg-slate-300 h-52 w-full rounded-t-xl">
          <img
            className="img-fluid"
            style={{
              width: "100%",
              height: "230px",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              objectFit: "cover",
            }}
            src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
            alt="Not Found Image"
          />
        </div>
        <div
          style={{
            background: "linear-gradient(to top, #1e293b, #000)",
            height: "90px",
            width: "100%",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              paddingTop: "1.75rem",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {trend.title}
          </h1>
        </div>
      </div>
    </div>
    ))}
    </>
  );
}

export default Discover;
