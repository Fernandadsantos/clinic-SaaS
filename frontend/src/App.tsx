import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Pricing from './pages/pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/planos' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
