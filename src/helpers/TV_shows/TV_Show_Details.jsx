import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import TVRecoment from './TVRecoment';
import TVCredits from '../TVCredits';
function TV_Show_Details() {
    let { id } = useParams();
    const [showDetails, setshowDetails] = useState(null);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=${publicKey}`;
        console.log(url)
        axios
            .get(url)
            .then((response) => {
                setshowDetails(response.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [id, publicKey]);

    if (!showDetails) {
        return <div>Loading...</div>;
    }
  return (
    <>
            <div>
                <div style={{ height: "900px", width: "100%", marginBottom:"50px"}}>
                    <div
                        style={{
                            margin: "50px",
                            height: "900px",
                            width: "full",
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
                              src={`https://image.tmdb.org/t/p/w500/${showDetails.poster_path}`}
                              style={{
                                  objectFit: "contain",
                                  borderRadius: "1.5rem",
                                  width: "100%",
                                  height: "300px",
                                 
                              }}
                              alt={showDetails.title} 
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
                              <h1 style={{ fontFamily: "sans", textAlign: "center" ,borderBottom: '4px solid black', }}>
                                    {showDetails.name}
                                </h1>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Original Language: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.original_language.toUpperCase()}
                                    </span>
                                </p>

                              
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Tag Line: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> "{showDetails.tagline}"
                                    </span>
                                </p>
                              <p>
                                  <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Total Episodes: </span>
                                  <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {showDetails.number_of_episodes}
                                  </span>
                              </p>

                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}> Total Seasons: </span>
                                  <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {showDetails.number_of_seasons}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Popularity: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.popularity}
                                    </span>
                                </p>
                             
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Spoken Languages: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.spoken_languages.map((lang, index) => (
                                            <span key={index}>
                                                {lang.english_name}
                                                {index < showDetails.spoken_languages.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Production Companies: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.production_companies.map((prod, index) => (
                                            <span key={index}>
                                                {prod.name}
                                                {index < showDetails.production_companies.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Production Countries: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.production_countries.map((country, index) => (
                                            <span key={index}>
                                                {country.name}
                                                {index < showDetails.production_countries.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Genres: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.genres.map((country, index) => (
                                            <span key={index}>
                                                {country.name}
                                                {index < showDetails.genres.length - 1
                                                    ? ", "
                                                    : ""}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                               
                                <p>
                                    <span style={{ fontFamily: "sans", fontWeight: "bolder" }}>
                                        Release Date: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {new Date(showDetails.first_air_date).toLocaleDateString(
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
                                        Vote Average: </span>
                                    <span style={{ fontFamily: "serif", fontWeight: "lighter" }}>
                                        {showDetails.vote_average.toFixed(1)}
                                    </span>
                                </p>
                            </div>

                        </div>
                      <div style={{ height: "200px", width: "1256px", marginBottom: "30px",position:"absolute",bottom:"0" }}>
                          <h3 style={{ fontFamily: "sans", borderBottom: '5px solid black',fontWeight: "bolder", textAlign: "left", marginLeft: "50px" }}>
                              Description:
                          </h3>
                          <span style={{ fontFamily: "serif", fontWeight: "lighter", display: "block", marginTop: "40px",overflow:"scroll",textAlign:"center" }}>
                              {showDetails.overview}
                          </span>
                      </div>
                    </div>
                 
                </div>
              <TVRecoment id={id}/>
              <TVCredits id={id} />
            </div>
         
    </>
  )
}

export default TV_Show_Details