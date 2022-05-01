import './App.css';
import HomePage from './Components/HomePage';
import BackAnimations from './Components/BackAnimations';
import Navbar from './Components/Navbar';
import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";
import Team from './Components/Team';
import AboutUs from './Components/Aboutus';
import ScrollToTop from './Components/ScrollToTop';
import Blogpage from './Components/Blogpage';





function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <BackAnimations />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<HomePage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/BlogPage' element={<Blogpage />} />
      </Routes>
    </BrowserRouter>
      <BackAnimations />
  </>
  );
}

export default App;
