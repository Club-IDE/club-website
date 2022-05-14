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
<<<<<<< HEAD
import Dec21_Blog2 from './Components/Blogs/Dec21_Blog2';
import Nov21_Blog1 from './Components/Blogs/Nov21_Blog1';
=======
import SubmitModal from './Components/Modal';
>>>>>>> 628a062b291c38f8ebed77e62996ed4a92d38015







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

    {/* <Dec21_Blog1/> */}
    <Discord />
    <Footer />

<<<<<<< HEAD
    <Nov21_Blog1/>
=======
<<<<<<< HEAD
    {/* <Dec21_Blog1/> */}
    <SubmitModal/>
=======
>>>>>>> f61afe28a8f92d75b0fd0bf1322626d9f2e6e6be
>>>>>>> 628a062b291c38f8ebed77e62996ed4a92d38015



  </>
  );
}

export default App;
