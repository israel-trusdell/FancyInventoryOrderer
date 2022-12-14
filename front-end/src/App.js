import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/CreateAccount';
import LandingPage from './components/landingpage';

function App() {
  return (
    <div className="Appcontainer">
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/create_profile" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
