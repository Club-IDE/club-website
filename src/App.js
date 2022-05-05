import './App.css';
import HomePage from './Components/HomePage';
import BackAnimations from './Components/BackAnimations';
import Navbar from './Components/Navbar';
import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";
import Team from './Components/Team';
import AboutUs from './Components/Aboutus';
import ScrollToTop from './Components/ScrollToTop';
import Blogpage from './Components/Blogpage';
import Discord from './Components/Discord';
import Footer from './Components/Footer';
<<<<<<< HEAD
import Eventpage from './Components/EventPage';
=======
import Activities_Page from './Components/Activities_Page'
import Blog_card from './Components/Blogs/Blog_card';

>>>>>>> 0b85d2d0aa27c2035ba813ca3c89cc5f986fbee3





function App() {
  return (
    <>

    <BrowserRouter>
      <BackAnimations />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<Eventpage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/BlogPage' element={<Blogpage />} />

      </Routes>
    </BrowserRouter>
    <Activities_Page />
    <Discord />
    <Footer />
    <Blog_card />


  </>
  );
}

export default App;
