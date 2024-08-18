import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

function MediaCard({ data, page, columns = 4, limit, customStyles }) {
    const columnClass = `col-${12 / columns}`;
    const itemsToDisplay = (limit === Infinity) ? data : data.slice(0, limit);

    return (
        <>
            {itemsToDisplay.map((item) => {
                const title = item.title || item.name;
                const releaseDate = item.release_date || item.first_air_date;

                return (
                    <div key={item.id} className={`${columnClass} mb-5`}>
                        <Link to={`${page}${item.id}`} className="">
                            <div
                                style={{
                                    height: "350px",
                                    width: "100%",
                                    backgroundColor: "gray",
                                    position: "relative",
                                    ...customStyles?.outerDiv,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "blue",
                                        height: "300px",
                                        width: "100%",
                                        position: "absolute",
                                        top: "0",
                                        ...customStyles?.imageWrapper,
                                    }}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            ...customStyles?.image,
                                        }}
                                        alt={title}
                                    />
                                    <div
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            height: "100%",
                                            color: "white",
                                            width: "100%",
                                            position: "absolute",
                                            top: "0",
                                            ...customStyles?.overlay,
                                        }}
                                    >
                                        {item.original_language && (
                                            <h1
                                                className="badge bg-warning"
                                                style={{
                                                    fontSize: "0.75rem",
                                                    color: "black",
                                                    fontFamily: "sans",
                                                    backdropFilter: "blur(2px)",
                                                    marginTop: "0",
                                                    position: "absolute",
                                                    top: "19px",
                                                    right: "0",
                                                    ...customStyles?.languageBadge,
                                                }}
                                            >
                                                {item.original_language.toUpperCase()}
                                            </h1>
                                        )}

                                        {releaseDate && (
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
                                                    marginBottom: "12px",
                                                    ...customStyles?.dateBadge,
                                                }}
                                            >
                                                {new Date(releaseDate).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </h1>
                                        )}

                                        {item.vote_average && (
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
                                                    marginBottom:"12px",
                                                    ...customStyles?.ratingBadge,
                                                }}
                                            >
                                                {item.vote_average.toFixed(1)}
                                            </h1>
                                        )}
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
                                        ...customStyles?.titleWrapper,
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
                                            ...customStyles?.title,
                                        }}
                                    >
                                        {title}
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

export default MediaCard;
