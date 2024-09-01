import { useState, useEffect } from 'react'
import  axios  from 'axios';
import MediaCard from './../MediaCard';

function TVRecoment({ id }) {

    const [Recomend, setRecomend] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;




    useEffect(() => {
        const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&api_key=${publicKey}`;
1
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
            <div style={{ background: "radial-gradient(blue, gray)", marginLeft: "50px", height: "660px", width: "1260px", marginBottom: "90px" }}>
                <div className="pt-5">
                    <div className="container text-justify">
                            <div className="col-12">
                                <div className="row">
                                <MediaCard 
                                    data={Recomend} 
                                    pages="/discover/tv_shows/" 
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

export default TVRecoment