import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom"; // Ensure this import is present
import Search from '../components/Search';

function ImpPeople() {
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [ImPeople, setImPeople] = useState([]);
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        let url;
        if (search) {
            url = `https://api.themoviedb.org/3/search/person?query=${search}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${publicKey}`;
        } else {
            url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}&api_key=${publicKey}`;
        }

        axios
            .get(url)
            .then((response) => {
                setImPeople(response.data.results);
                setTotalPages(response.data.total_pages);
            })
            .catch((error) => {
                console.error("Error fetching people data:", error);
            });
    }, [pageNumber, search, publicKey]);

    return (
        <>
            <div className="pt-5">
                <Search setSearch={setSearch} />
                <div className="container text-justify">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <PeopleShow page="/imppeople/" human={ImPeople} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '190px', background: "linear-gradient(to bottom, white, black)", }} className="bg-danger w-100 d-flex align-items-center justify-content-center">
                <Pagination
                    totalPages={totalPages}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                />
            </div>
        </>
    );
}

const PeopleShow = ({ human, page }) => {
    const genderMap = {
        1: "Female",
        2: "Male",
        0: "Not Specified",
    };

    const getBadgeClass = (gender) => {
        switch (gender) {
            case 2:
                return "bg-success";
            case 1:
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    };

    return (
        <>
            {human.map((actors) => (
                <div key={actors.id} className="col-3 mb-5">
                    <Link to={`${page}${actors.id}`}>
                        <div>
                            <div
                                style={{
                                    height: "350px",
                                    width: "100%",
                                    backgroundColor: "red",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "blue",
                                        height: "350px",
                                        width: "100%",
                                        position: "absolute",
                                        top: "0",
                                    }}
                                >
                                    <img
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "300px",
                                            objectFit: "cover",
                                        }}
                                        src={`https://image.tmdb.org/t/p/w500/${actors.profile_path}`}
                                        alt="Not Found Image"
                                    />
                                    <div style={{ width: "100%", height: "100%", position: "absolute", top: "0" }}>
                                        <h1 className="badge bg-warning" style={{ backgroundColor: "black", position: "absolute", top: "0", left: "0", fontFamily: "sans", marginTop: "12" }}>{actors.known_for_department}</h1>
                                        <h1 className={`badge ${getBadgeClass(actors.gender)}`} style={{ backgroundColor: "black", position: "absolute", top: "0", right: "0", fontFamily: "sans", marginTop: "12" }}>  {genderMap[actors.gender] || "Unknown"}</h1>
                                        <h1
                                            className="badge bg-primary"
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "black",
                                                fontFamily: "mono",
                                                backdropFilter: "blur(2px)",
                                                marginTop: "290px",
                                                position: "absolute",
                                                bottom: "25",
                                                right: "0",
                                                marginRight: "12",
                                            }}
                                        >
                                            {actors.popularity.toFixed(1)}
                                        </h1>
                                    </div>
                                    <div style={{ backgroundColor: "black", height: "50px", width: "100%" }}>
                                        <h1 style={{ fontSize: "1rem", color: "white", textAlign: "center", fontWeight: "700" }}>{actors.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default ImpPeople;
