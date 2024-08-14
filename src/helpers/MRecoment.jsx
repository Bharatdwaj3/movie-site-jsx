import { useState, useEffect } from 'react'
import  axios  from 'axios';
import MovieCards from './MovieCards';

function MRecoment({ id }) {

    const [Recomend, setRecomend] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;



    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&api_key=${publicKey}`;

        axios
            .get(url)
            .then((response) => {
                setRecomend(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [id,publicKey]);

    return (
        <>
            <div style={{ backgroundColor: "red", marginLeft: "50px", height: "660px", width: "1260px", marginBottom: "90px" }}>
                <div className="pt-5">
                    <div className="container text-justify">
                            <div className="col-12">
                                <div className="row">
                                <MovieCards 
                                    data={Recomend} 
                                    pages="/discover/movies/" 
                                    columns={6}
                                    limit={12}
                                    customStyles={{
                                        outerDiv: { height: "250px", marginTop: "2px", },
                                        imageWrapper: { height: "200px" }
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MRecoment