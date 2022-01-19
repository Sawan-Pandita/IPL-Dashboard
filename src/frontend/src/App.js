import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>
      </Router>
  );
}

export default App;
