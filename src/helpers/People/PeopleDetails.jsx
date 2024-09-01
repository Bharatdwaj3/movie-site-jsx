import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PeopleCredits from './PeopleCredits';

function PeopleDetails() {
  let { id } = useParams();
  const [ImPerson, setImPerson] = useState(null); 
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;


  useEffect(() => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${publicKey}`;

    axios
      .get(url)
      .then((response) => {
        setImPerson(response.data);
      })
      .catch((error) => {
        console.error("Error fetching person People details:", error);
      });
  }, [id, publicKey]);

  if (!ImPerson) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <div>
        <div style={{ height: "500px", width: "100%", marginTop: "90px",marginBottom: "90px" }}>
          <div style={{ margin: "50px", height: "500px", width: "full", background: "radial-gradient(blue, gray)",position:"relative" }}>
            <div style={{
              height: "50%", width: "290px", position: "absolute", borderRadius: "8px", left: "0" }}>
              <img src={`https://image.tmdb.org/t/p/w500/${ImPerson.profile_path}`} style={{objectFit:"contain",borderRadius:"1.5rem",width:"100%",height:"100%",}} alt="" />
            </div>
            <div style={{ height: "100%", marginRight: "35px", width: "890px", position: "absolute", right: "0",  }}>
              <div style={{ height: "50%", marginRight: "35px", width: "890px", position: "absolute", top: "0" }}>
                <h1 style={{fontFamily:"sans",textAlign:"center"}}>{ImPerson.name}</h1>
                <p>
                  <span style={{ fontFamily:"sans",fontWeight: "bolder" }}>Gender:</span>
                  <span style={{ fontFamily:"serif", fontWeight: "lighter" }}> {ImPerson.gender === 1 ? "Female" : ImPerson.gender === 2 ? "Male" : "unknown"}</span>
                </p>
                <p>
                  <span style={{ fontFamily:"sans",fontWeight: "bolder" }}>Popularity:</span>
                  <span style={{ fontFamily:"serif", fontWeight: "lighter" }}> {ImPerson.popularity}</span>
                </p>
                <p>
                  <span style={{ fontFamily:"sans",fontWeight: "bolder" }}>Birth Place:</span>
                  <span style={{ fontFamily:"serif", fontWeight: "lighter" }}> {ImPerson.place_of_birth}</span>
                </p>
                <p>
                  <span style={{ fontFamily:"sans",fontWeight: "bolder" }}>BirthDay:</span>
                  <span style={{ fontFamily: "serif", fontWeight: "lighter" }}> {new Date(ImPerson.birthday).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}</span>
                </p>
                <p>
                  <span style={{ fontFamily:"sans",fontWeight: "bolder" }}>Profession:</span>
                  <span style={{ fontFamily:"serif", fontWeight: "lighter" }}> {ImPerson.known_for_department}</span>
                </p>
               

                <></>
              </div>
              
              <div style={{ height: "50%", marginRight: "35px", width: "890px", position: "absolute", bottom: "0" }}>
 
                <p>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "mono",
                      marginTop: "30px",
                      textAlign: "left",
                      fontWeight: "light",
                      marginLeft: "50px",
                      overflow: "auto", // Add scrollbars if needed
                      maxHeight: "200px", // Set a max height if you want to restrict the size
                      width: "100%", 
                      whiteSpace: "pre-wrap", 
                    }}
                  >
                    {ImPerson.biography}
                  </span>
                </p>
                     
              </div>
            </div>
          </div>
        </div>  
        <PeopleCredits id={id}/>
      </div>
      
    </>
  );
}

export default PeopleDetails;
