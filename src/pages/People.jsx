import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Link } from "react-router-dom";

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
              <PeopleList sett={people} />
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

const PeopleList = ({ sett }) => {

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
      {sett.slice(0, 4).map((soda) => (
        <div key={soda.id} className="col-3 mb-5">
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
                  src={`https://image.tmdb.org/t/p/w500/${soda.profile_path}`}
                  alt="Not Found Image"
                />
                  <div style={{width:"100%",height:"100%",position:"absolute",top:"0"}}>
                    <h1 className="badge bg-warning" style={{backgroundColor:"black",position:"absolute",top:"0",left:"0",fontFamily:"sans",marginTop:"12"}}>{soda.known_for_department}</h1>
                    <h1 className={`badge ${getBadgeClass(soda.gender)}`}  style={{backgroundColor:"black",position:"absolute",top:"0",right:"0",fontFamily:"sans",marginTop:"12"}}>  {genderMap[soda.gender] || "Unknown"}</h1>
                  </div>
                  <div style={{backgroundColor:"black",height:"50px",width:"100%"}}>
                    <h1 style={{fontSize:"1rem",color:"white",textAlign:"center",fontWeight:"700"}}>{soda.name}</h1>

                    </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default People;
