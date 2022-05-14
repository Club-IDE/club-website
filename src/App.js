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
import Activities_Page from './Components/Activities_Page'
import Blog_card from './Components/Blogs/Blog_card';
import Eventpage from './Components/EventPage'
import Dec21_Blog2 from './Components/Blogs/Dec21_Blog2';
import Nov21_Blog1 from './Components/Blogs/Nov21_Blog1';







function App() {
  return (
    <>
    <BrowserRouter>
      <BackAnimations />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<Activities_Page />} />
        <Route path='/team' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/BlogPage' element={<Blogpage />} />
        <Route path='/EventPage' element={<Eventpage />} />

      </Routes>
    </BrowserRouter>

    <Discord />
    <Footer />

    <Nov21_Blog1/>



  </>
  );
}

export default App;
