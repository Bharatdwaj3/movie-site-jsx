import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DiscoverMedia from './components/DiscoverMedia';
import Discover from './pages/Discover';
import ImpPeople from './helpers/ImpPeople';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/*" element={<DiscoverMedia />} />
        <Route path="/imppeople" element={<ImpPeople />} />
      </Routes>
    </Router>
  );
}

export default App;