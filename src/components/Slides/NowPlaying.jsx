import { useState, useEffect } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NowPlaying() {

  const [slider, setSlider] = useState([]);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setSlider(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching now playing movies:", error);
      });
  }, [publicKey]);

  return (
    <div style={{ height: "400px", width: "100%", backgroundColor: "blue" }}>
      <div style={{ height: "90px", width: "500px", paddingTop: "30px", paddingLeft: "90px" }}>
        <h1 style={{ borderTop: "4px solid black" }}>Now Playing</h1>
      </div>
      <div style={{ width: "100%", height: "300px", padding: "30px" }}>
        <Slider {...settings}>
          {slider.map((movie) => (
            <div key={movie.id}>
                <div style={{ borderRadius: "0.75rem", position: "relative" }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height:"100%",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                    textAlign: "center",
                  }}>
              <OverlayTrigger 
                trigger="hover" 
                placement="bottom" 
                overlay={
                  <Popover id={`popover-${movie.id}`}
                  style={{
                      maxWidth: "280px",
                        maxHeight: "190px",
                        overflow:"scroll",
                      color: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      position: "absolute",
                      bottom: "-10px", // Adjust to position at the bottom of the title
                      right: "-10px", // Adjust to position at the right of the title
             
                      color: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      position: "absolute",
                      bottom: "-10px", // Adjust to position at the bottom of the title
                      right: "-10px", // Adjust to position at the right of the title
             
                  }}>
                    <Popover.Header as="h3">About Movie :</Popover.Header>
                    <Popover.Body>
                      {movie.overview || "No overview available."}
                    </Popover.Body>
                  </Popover>
                }
              >
              
                    <h3 style={{ fontSize: "0.9rem", color: "white", fontFamily: "sans", backdropFilter: "blur(2px)", textAlign: "left" }}>
                      {movie.title}
                    </h3>
                  
              </OverlayTrigger>
              </div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NowPlaying;
