import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

function AllCard({ data, columns = 4, limit, customStyles }) {
  const columnClass = `col-${12 / columns}`;
  const credToDisplay = (limit === Infinity) ? data : data.slice(0, limit);

  return (
    <>
      {credToDisplay.map((random) => {
        const dynamicPage = random.media_type === "movie" ? "movies" : "tv_shows";
        const pageLink = `/discover/${dynamicPage}/${random.id}`;

        return (
          <div key={random.id} className={`${columnClass} mb-5`}>
            <Link to={pageLink} className="">
              <div
                style={{
                  height: "350px",
                  width: "100%",
                  backgroundColor: "gray",
                  position: "relative",
                  ...customStyles.outerDiv,
                }}
              >
                <div
                  style={{
                    backgroundColor: "blue",
                    height: "300px",
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    ...customStyles.imageWrapper,
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${random.poster_path}`}
                    style={{
                      height: "100%",
                      width: "100%",
                      ...customStyles.image,
                    }}
                    alt=""
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      height: "100%",
                      color: "white",
                      width: "100%",
                      position: "absolute",
                      top: "0",
                      ...customStyles.overlay,
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
                       {random.orignal_language && (random.original_language.toUpperCase())}
                    </h1>
                    <h1
                      className="badge bg-primary"
                      style={{
                        fontSize: "0.75rem",
                        color: "black",
                        fontFamily: "sans",
                        backdropFilter: "blur(2px)",
                        marginTop: "0",
                        position: "absolute",
                        top: "25px",
                        left: "0",
                        marginRight: "12", ...customStyles.jobBadge,
                      }}
                    >
                      {random.character||random.job}
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
                      {new Date(random.first_air_date||random.release_date).toLocaleDateString("en-GB", {
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
                      {random.vote_average && (random.vote_average.toFixed(1))}
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
                    opacity: "0.5",
                    ...customStyles.titleWrapper,
                  }}
                >
                  <h1
                    style={{
                      fontSize: "1rem",
                      color: "white",
                      fontFamily: "serif",
                      backdropFilter: "blur(2px)",
                      marginTop: "12px",
                      textAlign: "center",
                      ...customStyles.title,
                    }}
                  >
                    {random.title || random.name}
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default AllCard;
