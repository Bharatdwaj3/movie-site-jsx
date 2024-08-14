import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DiscoverMedia from './components/DiscoverMedia';
import Discover from './pages/Discover';
import ImpPeople from './helpers/ImpPeople';
import PeopleDetails from './helpers/PeopleDetails';
import MDetails from './helpers/MDetails';
import TV_Show_Details from './helpers/TV_Show_Details';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/movies/:id" element={<MDetails />} />
        <Route path="/discover/tv_shows/:id" element={<TV_Show_Details />} />
        <Route path="/discover/*" element={<DiscoverMedia />} />
        <Route path="/imppeople" element={<ImpPeople />} />
        <Route path="/imppeople/:id" element={<PeopleDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;