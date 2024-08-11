import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="fs-3 ubuntu navbar-brand">
            Rick and Morty <span className="text-primary">Wiki</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li><Link to="/discover/movies">Movies</Link></li>
              <li><Link to="/discover/tv_shows">TV Shows</Link></li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar
