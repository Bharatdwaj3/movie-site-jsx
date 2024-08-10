import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function TVCards({datal}) {


  return (
    <>
      {datal.map((tv) => (
        <div key={tv.id} className="col-3 mb-5">
          <div className="">
            <div className="bg-slate-300 h-52 w-full rounded-t-xl">
              <img
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "230px",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  objectFit: "cover",
                }}
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                alt={tv.name}
              />
            </div>
            <div
              style={{
                background: "linear-gradient(to top, #1e293b, #000)",
                height: "90px",
                width: "100%",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "1.75rem",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {tv.name}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TVCards
