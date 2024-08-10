import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Gener from '../pages/category/Gener';

function Filter({setGenre}) {
return (

<>
  <div className="col-3">
    <div className="p-3 border">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div style={{ cursor: "pointer" }} className="text-primary text-center text-decoration-underline">
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gener setGenre={setGenre}/>
      </div>

    </div>
  </div>
</>
);
}

export default Filter;