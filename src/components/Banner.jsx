import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { FaStar, FaFilm, FaHeart, FaBookmark, FaPlay,FaStarHalf } from 'react-icons/fa';
import { MdLocalFireDepartment } from "react-icons/md";
import { Button } from 'react-bootstrap';

function Banner() {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${publicKey}`;
            try {
                const response = await axios.get(url);
                const movies = response.data.results;

                const detailedMovies = await Promise.all(
                    movies.map(async (movie) => {
                        const detailUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${publicKey}&language=en-US`;
                        const detailResponse = await axios.get(detailUrl);
                        return detailResponse.data;
                    })
                );

                setSlider(detailedMovies);
            } catch (error) {
                console.error("Error fetching top-rated movies or their details:", error);
            }
        };

        fetchTopRatedMovies();
    }, [publicKey]);

    return (
        <div style={{ height: "900px", width: "100%", position: "relative", overflow: "hidden" ,marginBottom:"90px"}}>
            <Carousel style={{ height: "100%", width: "100%" }}>
                {slider.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div style={{ height: "900px", width: "100%", position: "relative" }}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
                                style={{ height: "100%", objectFit: "cover", width: "100%" }}
                                className="d-block w-100"
                                alt={slide.title}
                            />
                            <div style={{
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                width: "100%",
                                height: "70%",
                                background: "linear-gradient(to top, black, transparent)",
                                padding: "20px",
                                boxSizing: "border-box",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                                <div>
                                    <h1 style={{ fontFamily: "serif", fontSize: "4rem", margin: "0" }}>
                                        {slide.title}
                                    </h1>
                                 
                                        <div style={{ marginTop: "20px" }}>
                                            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                                {Array(4).fill().map((_, index) => (
                                                    <FaStar key={index} size={24} style={{ marginRight: "5px", color: "yellow" }} />
                                                ))}
                                            <FaStarHalf  size={24} style={{ marginRight: "5px", color: "yellow" }} />
                                            </div>
                                            <div style={{ width:"10%",display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <MdLocalFireDepartment size={24} style={{ marginRight: "5px", color: "red" }} />
                                                    <h1 style={{ fontFamily: "sans", fontSize: "0.9rem", margin: "0", marginRight: "15px" }}>
                                                    {slide.popularity.toFixed(1)}
                                                    </h1>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <FaHeart size={24} style={{ marginRight: "5px", color: "red" }} />
                                                    <h1 style={{ fontFamily: "sans", fontSize: "0.9rem", margin: "0" }}>
                                                    {slide.vote_average.toFixed(1)}
                                                    </h1>
                                                </div>
                                            </div>
                                        <h1 style={{ fontFamily: "sans", fontSize: "0.9rem", marginBottom: "20px" }}>
                                            <FaFilm size={24} style={{ marginRight: "5px", color: "blue" }} />
                                            {slide.genres.map((genre, index) => (
                                                <span key={index}>
                                                    {genre.name}
                                                    {index < slide.genres.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </h1>
                                        <div style={{ width:"40%",maxHeight: "150px", overflow: "hidden", marginBottom: "10px" }}>
                                            <h2 style={{ fontFamily: "sans-serif", fontSize: "1rem", color: "white", margin: "0" }}>
                                                {slide.overview}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginTop: "10px",
                                    position: "absolute",
                                    bottom: "190px",
                                    left: "20px"
                                }}>
                                    <Button
                                        variant="primary"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '50px',
                                            width: '190px',
                                            backgroundColor: '#ff0000', // Red background
                                            border: 'none',
                                            borderRadius: '5px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            transition: 'background-color 0.3s, box-shadow 0.3s',
                                            color: 'white',
                                            fontSize: '16px',
                                            padding: '0 20px',
                                            fontFamily: 'Arial, sans-serif'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = '#cc0000';
                                            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = '#ff0000';
                                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <FaPlay size={25} style={{ marginRight: '8px' }} />
                                        Play
                                    </Button>
                                    <Button
                                        className="custom-button"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '50px',
                                            width: '190px',
                                            backgroundColor: '#007bff', // Bootstrap primary color
                                            border: 'none',
                                            borderRadius: '5px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            transition: 'background-color 0.3s, box-shadow 0.3s',
                                            color: 'white',
                                            fontSize: '16px',
                                            padding: '0 20px',
                                            fontFamily: 'Arial, sans-serif',
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.backgroundColor = '#0056b3';
                                            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.backgroundColor = '#007bff';
                                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                                        }}
                                    >
                                        <FaBookmark size={25} style={{ marginRight: '8px' }} />
                                        Bookmark
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;
