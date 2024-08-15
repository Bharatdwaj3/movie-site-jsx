import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";// Ensure this import is present
import Search from '../../components/Search';
import PeopleCard from "./PeopleCard";


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
                                <PeopleCard
                                    data={ImPeople}
                                    page="/imppeople/" 
                                    columns={4}
                                    limit={Infinity}
                                    customStyles={{}}
                                />
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



export default ImpPeople;
