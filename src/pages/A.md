```js

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
function SearchMovie({ data }) {
  return (

    <>
      <div>
        <div className="w-full h-auto grid grid-cols-5 place-content-center grid-rows-4 grid-flow-row gap-[2rem] justify-between">
          {data.map((movie) => (
            <div key={movie.id} className="card" style={{
              height: "340px",
              width: "200px",
            }}>
              <img style={{
                width: "100%",
                height: "240px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="No Poster Found ..." />
              <div className="card-body text-bg-secondary"
                style={{ width: "100%", height: "100px", overflow: "hidden" }}>
                <h1 className="text-center text-lg font-extralight font-serif">{movie.title}</h1>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchMovie

```


```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DiscoverMedia from './components/DiscoverMedia';
import Discover from './pages/Discover';
import ImpPeople from './helpers/ImpPeople';
import SearchPage from './pages/SearchPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/*" element={<DiscoverMedia />} />
        <Route path="/imppeople" element={<ImpPeople />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;

```