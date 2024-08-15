import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";
import PeopleCard from "../helpers/People/PeopleCard";

function People() {
  const [people, setPeople] = useState([]);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setPeople(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching sodaing movies:", error);
      });
  }, [publicKey]);

  return (
    <div className="pt-5">
      <div className="container text-justify">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <PeopleCard 
                data={people} 
                page="/imppeople/" 
                columns={4}
                limit={4}
                customStyles={{
                }} />
              <Link to="/imppeople">
                <button>See People</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default People;
