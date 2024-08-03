
import FinalTVBrowse from '../components/Browse/TV/FinalTVBrowse';
import FinalMovieBrowse from '../components/Browse/Movie/FinalMovieBrowse';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './../helpers/NavBar';

function BrowseMedia () {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/finalmoviebrowse" element={<FinalMovieBrowse />} />
          <Route path="/finaltvbrowse" element={<FinalTVBrowse />} />
        </Routes>
      </Router>
    </>
  );
}

export default BrowseMedia