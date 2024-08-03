import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function TopMovie({ datam }) {
  return (
    <>
      <div>
        <div
          className="w-full h-auto grid grid-cols-6 place-content-center grid-rows-3 grid-flow-row gap-2 justify-between"
          style={{ backgroundImage: "radial-gradient(white, black)" }}
        >
          {datam.slice(0, 18).map((tv) => (
            <div
              key={tv.id}
              className="card"
              style={{
                height: "230px",
                width: "190px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "160px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                className="card-img-top"
                alt="No Poster Found ..."
              />
              <div
                className="card-body text-bg-secondary"
                style={{ width: "100%", height: "100px", overflow: "hidden" }}
              >
                <h1 className="text-left align-top p-0 text-md font-extralight font-serif">
                  {tv.name}
                </h1>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopMovie;
