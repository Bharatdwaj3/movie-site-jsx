import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TVDetails() {
    let { id } = useParams();
    const [TVDetail, setTVDetail] = useState(null);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${publicKey}`;

        axios
            .get(url)
            .then((response) => {
                setTVDetail(response.data);
            })
            .catch((error) => {
                console.error("Error fetching TV details:", error);
            });
    }, [id, publicKey]);

    if (!TVDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <div style={{ height: "500px", width: "100%" }}>
                    <div
                        style={{
                            margin: "50px",
                            height: "500px",
                            width: "full",
                            background: "radial-gradient(yellow, orange)",
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
                                src={`https://image.tmdb.org/t/p/w500/${TVDetail.poster_path}`}
                                style={{
                                    objectFit: "contain",
                                    borderRadius: "1.5rem",
                                    width: "100%",
                                    height: "100%",
                                }}
                                alt={TVDetail.name}
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
                                <h1 style={{ fontFamily: "sans", textAlign: "center" }}>
                                    {TVDetail.name}
                                </h1>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Original Language:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {TVDetail.original_language.toUpperCase()}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Popularity:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {TVDetail.popularity}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Episodes:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {TVDetail.number_of_episodes}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Seasons:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {TVDetail.number_of_seasons}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Spoken Languages:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {TVDetail.spoken_languages.map((lang, index) => (
                                            <span key={index}>
                                                {lang.english_name}
                                                {index < TVDetail.spoken_languages.length - 1
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
                                        {TVDetail.production_companies.map((prod, index) => (
                                            <span key={index}>
                                                {prod.name}
                                                {index < TVDetail.production_companies.length - 1
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
                                        {TVDetail.production_countries.map((country, index) => (
                                            <span key={index}>
                                                {country.name}
                                                {index < TVDetail.production_countries.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        First Air Date:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {new Date(TVDetail.first_air_date).toLocaleDateString(
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
                                        Last Air Date:
                                    </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {new Date(TVDetail.last_air_date).toLocaleDateString(
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
                                        {TVDetail.vote_average.toFixed(1)}
                                    </span>
                                </p>
                            </div>

                            <div
                                style={{
                                    height: "50%",
                                    marginRight: "35px",
                                    width: "890px",
                                    position: "absolute",
                                    bottom: "0",
                                }}
                            >
                                <p>
                                    <span
                                        style={{
                                            display: "block",
                                            fontFamily: "mono",
                                            marginTop: "30px",
                                            textAlign: "left",
                                            fontWeight: "light",
                                            marginLeft: "50px",
                                        }}
                                    >
                                        {TVDetail.overview}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TVDetails;
