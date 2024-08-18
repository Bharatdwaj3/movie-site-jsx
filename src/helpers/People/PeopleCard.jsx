import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

function PeopleCard({ data, page, columns = 4, limit, customStyles }) {
  const columnClass = `col-${12 / columns}`;
  const personToDisplay = limit === Infinity ? data : data.slice(0, limit);
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
  }
  return (
    <>
      {personToDisplay.map((person) => (
        <div key={person.id} className={`${columnClass} gy-5 mb-5`}>
          <Link to={`${page}${person.id}`} className="">
            <div
              style={{
                height: "350px",
                width: "100%",
                backgroundColor: "red",
                position: "relative",
                ...customStyles.outerDiv,
              }}
            >
              <div
                style={{
                  backgroundColor: "gray",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: "0",
                  ...customStyles.imageWrapper,
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...customStyles.image,
                  }}
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt="Not Found Image"
                />
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    ...customStyles.overlay,
                  }}
                >
                  <h1
                    className="badge bg-warning"
                    style={{
                      backgroundColor: "black",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      fontFamily: "sans",
                      marginTop: "12px",
                        ...customStyles.deptBadge,
                    }}
                  >
                    {person.known_for_department}
                  </h1>
                  <h1
                    className={`badge ${getBadgeClass(person.gender)}`}
                    style={{
                      backgroundColor: "black",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      fontFamily: "sans",
                      marginTop: "12px",
                        ...customStyles.genderBadge
                    }}
                  >
                    {genderMap[person.gender] || "Unknown"}
                  </h1>
                  <h1
                    className="badge bg-primary"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "mono",
                      backdropFilter: "blur(2px)",
                      marginTop: "290px",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      marginRight: "12",
                        ...customStyles.popularityBadge
                    }}
                  >
                    {person.popularity.toFixed(1)}
                  </h1>
                </div>
                          <div
                              style={{
                                  backgroundColor: "black",
                                  height: "50px",
                                  width: "100%",
                                  position: "absolute",
                                  bottom: "-50px",
                                  ...customStyles.bg_nameplate,
                              }}
                          >
                              <h1
                                  style={{
                                      fontSize: "1rem",
                                      color: "white",
                                      textAlign: "center",
                                      fontWeight: "700",
                                      ...customStyles.nametag,
                                  }}
                              >
                                  {person.name}
                              </h1>
                          </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default PeopleCard;
