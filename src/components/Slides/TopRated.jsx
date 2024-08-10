import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";

function TopRated() {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setSlider(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [publicKey]);

  return (
    <div
      style={{ height: "600px", width: "100%", overflow: "hidden" }}
      className="position-relative"
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="carousel-inner">
          {slider.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${slide.backdrop_path}`}
                style={{ height: "600px", objectFit: "cover" }}
                className="d-block w-100"
                alt={slide.title}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ top: "10px", left: "10px", textAlign: "left" }}
              >
                <div
                  className="position-relative "
                  style={{
                    background:
                      "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 50))",
                    width: "700px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "2rem",
                      color: "white",
                      fontFamily: "sans",
                      backdropFilter: "blur(2px)",
                      width: "400px",
                    }}
                  >
                    {slide.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "white",
                      fontFamily: "Times New Roman, Times, serif",
                      backdropFilter: "blur(2px)",
                      width: "700px",
                    }}
                  >
                    {slide.overview}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div
            className="position-absolute top-50 start-2 translate-middle ms-5 "
           
          >
            <button
              type="button"
              className="btn btn-outline-light "
              style={{
                marginLeft: "190px",
                width: "190px",
                backdropFilter: "blur(2px)",
                marginTop: "200px",
              }}
            >
              <h1 style={{ color: "black", fontSize: "1rem" }}>Play</h1>
            </button>
          </div>
        </div>
        <div className="carousel-indicators">
          {slider.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          style={{
            bottom: "20px",
            height: "100px",
            width: "30px",
            top: "190px",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={{
            bottom: "20px",
            height: "100px",
            width: "30px",
            top: "190px",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default TopRated;
