import './App.css';
import HomePage from './Components/HomePage';
import BackAnimations from './Components/BackAnimations';
import Navbar from './Components/Navbar';


import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";
import Team from './Components/Team';
import AboutUs from './Components/Aboutus';






function App() {
  return (
    <>
    <BrowserRouter>
      <BackAnimations />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<HomePage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
