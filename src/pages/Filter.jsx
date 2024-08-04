import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Gener from './category/Gener';
import Lang from './category/Lang';

function Filter() {
  return (
    <>
      <div className="col-3">
        <div className="p-3 border">
          <div className="text-center fw-bold fs-4 mb-4">Filter</div>
          <div
            style={{ cursor: "pointer" }}
            className="text-primary text-center text-decoration-underline"
          >
            Clear Filters
          </div>
          <div className="accordion" id="accordionExample">
             <Gener/>
            <Lang/></div>
         
        </div>
      </div>
    </>
  );
}

export default Filter;
