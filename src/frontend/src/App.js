import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
