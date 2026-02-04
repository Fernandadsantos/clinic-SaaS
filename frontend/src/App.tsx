import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Pricing from './pages/pricing';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/planos' element={<Pricing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recuperar_senha' element={<ForgotPassword />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/cadastro' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
