import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

function TVCards({ data, page, columns = 4, limit, customStyles }) {
  const columnClass = `col-${12 / columns}`;
  const showsToDisplay = (limit === Infinity) ? data : data.slice(0, limit);

  return (
    <>
      {showsToDisplay.map((tv) => (
        <div key={tv.id} className={`${columnClass} mb-5` }>
          <Link to={`${page}${tv.id}`} className="">
            <div
              style={{
                height: "350px",
                width: "100%",
                backgroundColor: "gray",
                position: "relative", ...customStyles.outerDiv,
              }}
            >
              <div
                style={{
                  backgroundColor: "blue",
                  height: "300px",
                  width: "100%",
                  position: "absolute",
                  top: "0", ...customStyles.imageWrapper,
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                  style={{ height: "100%", width: "100%", ...customStyles.image, }}
                  alt=""
                />
                <div
                  style={{
                    backgroundColor: "transparent",
                    height: "100%",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    position: "absolute",
                    top: "0", ...customStyles.overlay,
                  }}
                >
                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "sans",
                      backdropFilter: "blur(2px)",
                      marginTop: "0",
                      position: "absolute",
                      top: "19",
                      right: "0",
                      marginRight: "12", ...customStyles.languageBadge,
                    }}
                  >
                    {tv.original_language.toUpperCase()}
                  </h1>

                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "mono",
                      backdropFilter: "blur(2px)",
                      marginTop: "24px",
                      position: "absolute",
                      bottom: "0",
                      left: "0", ...customStyles.dateBadge,
                    }}
                  >
                    {new Date(tv.first_air_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h1>
                  <h1
                    className="badge bg-warning"
                    style={{
                      fontSize: "0.75rem",
                      color: "black",
                      fontFamily: "mono",
                      backdropFilter: "blur(2px)",
                      marginTop: "24px",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      marginRight: "12", ...customStyles.ratingBadge,
                    }}
                  >
                    {tv.vote_average.toFixed(1)}
                  </h1>
                </div>
              </div>
              <div
                style={{
                  marginTop: "290px",
                  height: "62px",
                  width: "100%",
                  backgroundColor: "black",
                  position: "absolute",
                  bottom: "0",
                  opacity: "0.5", ...customStyles.titleWrapper,
                }}
              >
                <h1
                  style={{
                    fontSize: "1rem",
                    color: "white",
                    fontFamily: "serif",
                    backdropFilter: "blur(2px)",
                    marginTop: "12px",
                    textAlign: "center", ...customStyles.title,
                  }}
                >
                  {tv.name}
                </h1>
              </div>
            </div> 
          </Link>
        </div>
      ))}
    </>
  );
}

export default TVCards
