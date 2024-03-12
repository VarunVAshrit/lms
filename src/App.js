import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/registration/Signup';
import AdminDashboard from './components/dashboards/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admindashboard' element={<AdminDashboard />} /> {/* Add route for Welcome component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
