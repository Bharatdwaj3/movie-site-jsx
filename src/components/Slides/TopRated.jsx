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
        console.error("Error fetching top-rated movies:", error);
      });
  }, [publicKey]);

  return (
    <div>
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          {slider.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ height: "100%" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
                style={{ height: "100%", objectFit: "cover", width: "100%" }}
                className="d-block w-100"
                alt={slide.title}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  left: "2px",
                  textAlign: "left",
                  color: "white",
                  height:"100%",
                  width: "50%",
                 
                  padding: "20px",background: "linear-gradient(to right, black, transparent)",

                  borderRadius: "8px",
                }}
              >
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
                  {slide.title}
                </h1>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.5em", height: "300px", overflow: "hidden" }}>
                  {slide.overview}
                </p>
                <button
                  type="button"
                  className="btn btn-danger btn-lg"
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    height:"50px",
                    width:"190px",
                    fontWeight: "bold",
                  }}
                >
                  Play
                </button><button
                  type="button"
                  className="btn btn-danger btn-lg"
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    height:"50px",
                    width:"190px",
                    fontWeight: "bold",
                    marginLeft:"90px"
                  }}
                >
                  More
                </button>

              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            height: "100px",
            width: "50px",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}
          ></span>

            

          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            height: "100px",
            width: "50px",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50%" }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
            <div style={{width:"100%",height:"130px",backgroundColor:"gray",
               borderBottomRightRadius: "3rem", // 8px
  borderBottomLeftRadius: "3rem"
            }}>
              <button style={{height:"50px",borderRadius:"9999px",position:"absolute",bottom:"-90px",marginRight:"32px",right:"0",width:"190px",backgroundColor:"blue"}}>
                <h1 style={{textColor:"white",fontWeight:"700",fontSize:"18px"}}>Watch Now</h1>
                </button>
            </div>
    </div>
  );
}

export default TopRated;
