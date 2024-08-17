import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MRecoment from './MRecoment';
import MovieCredits from './MovieCredits';

function MDetails() {
    let { id } = useParams();
    const [MovieDetail, setMovieDetail] = useState({});
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${publicKey}`;

        axios
            .get(url)
            .then((response) => {
                setMovieDetail(response.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [id, publicKey]);

    if (!MovieDetail.title) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <div style={{ height: "900px", width: "100%", marginBottom: "50px" }}>
                    <div
                        style={{
                            margin: "50px",
                            height: "900px",
                            width: "100%",
                            background: "radial-gradient(blue, gray)",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                height: "50%",
                                width: "290px",
                                position: "absolute",
                                borderRadius: "8px",
                                left: "0",
                            }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${MovieDetail.poster_path}`}
                                style={{
                                    objectFit: "contain",
                                    borderRadius: "1.5rem",
                                    width: "100%",
                                    height: "300px",
                                }}
                                alt={MovieDetail.title}
                            />
                        </div>
                        <div
                            style={{
                                height: "100%",
                                marginRight: "35px",
                                width: "890px",
                                position: "absolute",
                                right: "0",
                            }}
                        >
                            <div
                                style={{
                                    height: "50%",
                                    marginRight: "35px",
                                    width: "890px",
                                    position: "absolute",
                                    top: "0",
                                }}
                            >
                                <h1 style={{ fontFamily: "sans", textAlign: "center", borderBottom: '4px solid black' }}>
                                    {MovieDetail.title}
                                </h1>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Original Language:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.original_language?.toUpperCase()}
                                    </span>
                                </p>

                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Tag Line: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> "{MovieDetail.tagline}"
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Revenue: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> ${MovieDetail.revenue}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Budget: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> ${MovieDetail.budget}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Runtime: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {MovieDetail.runtime} minutes
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Popularity:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.popularity}
                                    </span>
                                </p>

                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Spoken Languages:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.spoken_languages?.map((lang, index) => (
                                            <span key={index}>
                                                {lang.english_name}
                                                {index < MovieDetail.spoken_languages.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Production Companies:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.production_companies?.map((prod, index) => (
                                            <span key={index}>
                                                {prod.name}
                                                {index < MovieDetail.production_companies.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Production Countries:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.production_countries?.map((country, index) => (
                                            <span key={index}>
                                                {country.name}
                                                {index < MovieDetail.production_countries.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Genres:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.genres?.map((genre, index) => (
                                            <span key={index}>
                                                {genre.name}
                                                {index < MovieDetail.genres.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>

                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Release Date:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {new Date(MovieDetail.release_date).toLocaleDateString(
                                            "en-GB",
                                            {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                        )}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Vote Average:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {MovieDetail.vote_average?.toFixed(1)}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div style={{ height: "200px", width: "1256px", marginBottom: "30px", position: "absolute", bottom: "0" }}>
                            <h3 style={{ fontFamily: "sans", borderBottom: '5px solid black', fontWeight: "bolder", textAlign: "left", marginLeft: "50px" }}>
                                Description:
                            </h3>
                            <span style={{ fontFamily: "serif", fontWeight: "lighter", display: "block", marginTop: "40px", overflow: "scroll", textAlign: "center" }}>
                                {MovieDetail.overview}
                            </span>
                        </div>
                    </div>
                </div>
                <MRecoment id={id} />
                <MovieCredits id={id} />
            </div>
        </>
    );
}

export default MDetails;
