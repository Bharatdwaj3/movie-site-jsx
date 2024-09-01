import { useState, useEffect } from 'react'
import axios from 'axios';
import MediaCard from './../MediaCard';
function TVRecoment({ id }) {

    const [Recomment, setRecomment] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;


    useEffect(() => {
        const url = ` https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&api_key=${publicKey}`;
 
        axios
            .get(url)
            .then((response) => {
                setRecomment(response.data.results);
            })
           
    }, [id, publicKey]);

    return (
        <>
            <div style={{ background: "radial-gradient(blue, gray)", marginLeft: "50px", height: "960px", width: "1260px", marginBottom: "90px" }}>
                <div className="pt-5">
                    <div
                        style={{
                            marginBottom:"90px",
                            height: "90px",
                            width: "500px", borderBottom: "12px solid black", 
                       
                        }}
                    >
                        <h1 style={{ fontFamily: "sans", textAlign: "center", paddingTop: "20px", color: "black" }}>
                            Recommended
                        </h1>
                    </div>
                    <div className="container text-justify">
                        <div className="col-12">
                            <div className="row">
                               
                                <MediaCard
                                    data={Recomment}
                                    page="/discover/tv_shows/"
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

export default TVRecoment