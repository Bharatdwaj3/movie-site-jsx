import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function TVCards({datal}) {


  return (
    <>
      {datal.map((tv) => (
        <div key={tv.id} className="col-3 mb-5">
          <div className="">
            <div
              style={{
                height: "350px",
                width: "100%",
                backgroundColor: "gray",
                position: "relative",
              }}
            >
              <div
                style={{
                  backgroundColor: "blue",
                  height: "300px",
                  width: "100%",
                  position: "absolute",
                  top: "0",
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                  style={{ height: "100%", width: "100%" }}
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
                    top: "0",
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
                      marginRight: "12",
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
                      left: "0",
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
                      marginRight: "12",
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
                  opacity: "0.5",
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
                  }}
                >
                  {tv.name}
                </h1>
              </div>
            </div>
        </div>
        </div>
      ))}
    </>
  );
}

export default TVCards
