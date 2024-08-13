import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MDetails() {
    let { id } = useParams();
    const [MovieDetail, setMovieDetail] = useState(null);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${publicKey}`;

        axios
            .get(url)
            .then((response) => {
                setMovieDetail(response.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [id, publicKey]);

    if (!MovieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <div style={{ height: "500px", width: "100%" }}>
                    <div style={{ margin: "50px", height: "500px", width: "full", background: "radial-gradient(yellow, orange)", position: "relative" }}>
                        <div style={{
                            height: "50%", width: "290px", position: "absolute", borderRadius: "8px", left: "0"
                        }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${MovieDetail.poster_path}`}
                                style={{ objectFit: "contain", borderRadius: "1.5rem", width: "100%", height: "100%" }}
                                alt=""
                            />
                        </div>
                        <div style={{ height: "100%", marginRight: "35px", width: "890px", position: "absolute", right: "0" }}>
                            <div style={{ height: "50%", marginRight: "35px", width: "890px", position: "absolute", top: "0" }}>
                                <h1 style={{ fontFamily: "sans", textAlign: "center" }}>{MovieDetail.title}</h1>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>Original Language:</span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {MovieDetail.original_language.toUpperCase()}</span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>Popularity:</span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {MovieDetail.popularity}</span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>Release Date:</span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {new Date(MovieDetail.release_date).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}</span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>Vote:</span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {MovieDetail.vote_average.toFixed(1)}</span>
                                </p>
                            </div>

                            <div style={{ height: "50%", marginRight: "35px", width: "890px", position: "absolute", bottom: "0" }}>
                                <p>
                                    <span style={{ display: "block", fontFamily: "mono", marginTop: "30px", textAlign: "left", fontWeight: "light", marginLeft: "50px" }}>{MovieDetail.overview}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MDetails;
