import { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleCard from '../People/PeopleCard';

// eslint-disable-next-line react/prop-types
function MovieCredits({id}) {

    const [credits, setCredits] = useState([]);
    const [crew, setCrew] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;




 useEffect(() => {
    async function loadCred() {
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${publicKey}`;
            const response = await axios.get(url);
            setCredits(response.data.cast || []);
            setCrew(response.data.crew || []);
        } catch (error) {
            console.error('Error fetching credits:', error);
        }
    }

    loadCred();
}, [id, publicKey]);

  return (
    <>
          <div style={{ background: "radial-gradient(blue, gray)", marginLeft: "50px", height: "960px", width: "93.5%", marginBottom: "90px" }}>
              <div className="pt-5">
                  <div
                      style={{
                          marginBottom: "90px",
                          height: "90px",
                          width: "500px", borderBottom: "12px solid black",

                      }}
                  >
                      <h1 style={{ fontFamily: "sans", textAlign: "center", paddingTop: "20px", color: "black" }}>
                          Cast :
                      </h1>
                  </div>
                  <div className="container text-justify">
                      <div className="col-12">
                          <div className="row">

                              <PeopleCard
                                  data={credits}
                                  page="/imppeople/"
                                  columns={6}
                                  limit={12}
                                  customStyles={{
                                      outerDiv: { height: "250px", marginTop: "2px", },
                                      imageWrapper: { height: "200px" }
                                  }} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{ background: "radial-gradient(blue, gray)", marginLeft: "50px", height: "960px", width: "93.5%", marginBottom: "90px" }}>
              <div className="pt-5">
                  <div
                      style={{
                          marginBottom: "90px",
                          height: "90px",
                          width: "500px", borderBottom: "12px solid black",

                      }}
                  >
                      <h1 style={{ fontFamily: "sans", textAlign: "center", paddingTop: "20px", color: "black" }}>
                          Crew :
                      </h1>
                  </div>
                  <div className="container text-justify">
                      <div className="col-12">
                          <div className="row">

                              <PeopleCard
                                  data={crew}
                                  page="/imppeople/"
                                  columns={6}
                                  limit={12}
                                  customStyles={{
                                      outerDiv: { height: "250px", marginTop: "2px", },
                                      imageWrapper: { height: "200px" }
                                  }} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default MovieCredits