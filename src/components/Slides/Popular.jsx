import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Popular() {

    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [slider, setSlider] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setSlider(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching upcoming movies:", error);
      });
  }, [publicKey]);

  return (
    <div style={{height:"400px ",width:"100%", backgroundColor:"blue"}}>
      <div
        style={{
          height: "90px",
          width: "500px",
          paddingTop: "30px",
          paddingLeft: "90px",
        }}
      >
        <h1 style={{ borderTop: "4px solid black" }}>Popular Movies</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "300px",
          padding: "30px",
          centerMode: true,
          centerPadding: "30px",
        }}
      >
        <Slider {...settings}>
          {slider.map((movie) => (
            <div key={movie.id}>
              <div
                style={{
                  borderRadius: "0.75rem",
                  position: "relative",
                  padding: "0 15px",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "407px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                    height: "100%",
                    marginLeft: "15px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      fontFamily: "sans",
                      backdropFilter: "blur(2px)",
                      width: "400px",
                      paddingTop: "40px",
                      paddingLeft: "12px",
                      textAlign: "left",
                    }}
                  >
                    {movie.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Popular
