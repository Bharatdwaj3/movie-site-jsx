import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { FaStar, FaFilm, FaHeart, FaBookmark } from 'react-icons/fa';
import { MdLocalFireDepartment } from "react-icons/md"
import { FaPlay } from 'react-icons/fa';
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
        <div style={{ height: "900px", width: "100%", marginBottom: "50px", position: "relative", overflow: "hidden" }}>
            <Carousel style={{ height: "100%", width: "100%" }}>
                {slider.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div style={{ height: "900px", width: "100%", position: "relative", }}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
                                style={{ height: "100%", objectFit: "cover", width: "100%" }}
                                className="d-block w-100"
                                alt={slide.title}
                            />
                            <div style={{height: "90px", width: "auto", position: "absolute", top: "360px", background: "linear-gradient(to bottom, black, transparent)" }}>
                                <h1 style={{ textAlign: "left", fontFamily: "serif", fontSize: "4rem", color: "white" }}>
                                    {slide.title}
                                </h1>
                            </div>
                            <div style={{ height: "50%", width: "100%", position: "absolute", bottom: "0", background: "linear-gradient(to right, black, transparent)"}}>
                                <div style={{ position: "absolute", bottom: "0", width: "70%", height: "100%", left: "0" }}>
                                    <div style={{ position: "absolute", top: "0", marginLeft: "90px", height: "90px", width: "57.3%" }}>
                                        <div style={{ height: "50%", width: "50%", position: "absolute", top: "0", left: "0" }}>
                                            {Array(5).fill().map((_, index) => (
                                                <FaStar key={index} size={24} style={{ marginRight: "5px", color: "yellow" }} />
                                            ))}
                                        </div>
                                        <div style={{ height: "50%", width: "50%", position: "absolute", top: "0", right: "0" }}>
                                            <div style={{ height: "50%", width: "50%", position: "absolute", top: "0", left: "0" }}>

                                                <h1 style={{ textAlign: "center",fontFamily: "sans", fontSize: "0.9rem" ,color:"white"}}>
                                                    <MdLocalFireDepartment size={24} style={{ marginRight: "5px", color: "red" }} />{slide.popularity}
                                                </h1>
                                            </div>
                                            <div style={{ height: "50%", width: "50%", position: "absolute", top: "0", right: "0" }}>
                                                <h1 style={{ textAlign: "center", fontFamily: "sans", fontSize: "0.9rem", color: "white" }}>
                                                    <FaHeart size={24} style={{ marginRight: "5px", color: "red" }} />{slide.vote_average}</h1>
                                            </div>
                                            <div style={{ height: "50%", width: "100%", position: "absolute", bottom: "0" }}>

                                                <h1 style={{ textAlign: "center", fontFamily: "sans", fontSize: "0.9rem", color: "white" }}>
                                                    <FaFilm size={24} style={{ marginRight: "5px", color: "blue" }} />
                                                    {slide.genres.map((genre, index) => (
                                                        <span key={index}>
                                                            {genre.name}
                                                            {index < slide.genres.length - 1 ? ", " : ""}
                                                        </span>
                                                    ))}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        position: "absolute",
                                        top: "90px",
                                        height: "70%",
                                        width: "100%"
                                    }}>
                                        <div style={{
                                            position: "absolute",
                                            top: "0",
                                            height: "auto",
                                            width: "calc(100% - 60px)",
                                            marginLeft: "30px",
                                            overflow: "hidden",
                                            whiteSpace: "normal",
                                            padding: "10px",
                                            boxSizing: "border-box"
                                        }}>
                                            <h1 style={{
                                                textAlign: "center",
                                                fontFamily: "sans-serif",
                                                fontSize: "1.2rem",
                                                margin: "0",color:"white",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "normal",
                                                wordWrap: "break-word"
                                            }}>
                                                {slide.overview}
                                            </h1>
                                        </div>
                                        <div style={{ position: "absolute", bottom: "0", height: "90px", width: "80%", marginLeft: "90px", }}>
                                            <div style={{ marginBottom: "20px", position: "absolute", left: "0", bottom: "0", height: "30px", width: "30%" }}>
                                                <Button
                                                    variant="primary"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        height: '50px',
                                                        width: '190px',
                                                        backgroundColor: '#007bff', // Bootstrap primary color
                                                        border: 'none', // Remove default border
                                                        borderRadius: '5px', // Rounded corners
                                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                                                        transition: 'background-color 0.3s, box-shadow 0.3s', // Smooth transition
                                                        color: 'white', // Text color
                                                        fontSize: '16px', // Adjust text size
                                                        padding: '0 20px', // Horizontal padding
                                                        marginBottom: '20px',
                                                        fontFamily: 'Arial, sans-serif' // Font for consistency
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#0056b3'; // Darker blue on hover
                                                        e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)'; // More prominent shadow on hover
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#007bff'; // Original blue
                                                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Original shadow
                                                    }}
                                                >
                                                    <FaPlay size={25} style={{ marginRight: '8px' }} />
                                                    Bookmark
                                                </Button>

                                            </div>
                                            <div style={{ marginBottom: "20px", position: "absolute", right: "0", bottom: "0", height: "30px", width: "30%" }}>
                                                <Button
                                                    variant="primary"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        height: '50px',
                                                        width: '190px',
                                                        backgroundColor: '#007bff', // Bootstrap primary color
                                                        border: 'none', // Remove default border
                                                        borderRadius: '5px', // Rounded corners
                                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
                                                        transition: 'background-color 0.3s, box-shadow 0.3s', // Smooth transition
                                                        color: 'white', // Text color
                                                        fontSize: '16px', // Adjust text size
                                                        padding: '0 20px', // Horizontal padding
                                                        marginBottom: '20px',
                                                        fontFamily: 'Arial, sans-serif' // Font for consistency
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#0056b3'; // Darker blue on hover
                                                        e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)'; // More prominent shadow on hover
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#007bff'; // Original blue
                                                        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Original shadow
                                                    }}
                                                >
                                                    <FaBookmark size={25} style={{ marginRight: '8px' }} />
                                                    Bookmark
                                                </Button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ position: "absolute", bottom: "0", width: "30%", height: "100%", right: "0" }}>
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
