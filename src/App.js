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
import SubmitModal from './Components/Modal';
import Sept21_Blog1 from './Components/Blogs/Sept21_Blog1'
import Sept21_Blog2 from './Components/Blogs/Sept21_Blog2'
import Nov21_Blog2 from './Components/Blogs/Nov21_Blog2'
import Bloglist from './Components/BlogList';
import BlogDetails from './Components/BlogDetails';




function App() {
  
  return (
    <>
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/activities' element={<Activities_Page />} />
        <Route path='/team' element={<Team />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/blogpage' element={<Blogpage />} />
        <Route path='/blogpage/1' element={<Nov21_Blog2 />} />
        <Route path='/blogpage/2' element={<Sept21_Blog1 />} />
        
            
        <Route path='/eventpage' element={<Eventpage />} />


      </Routes>
    </BrowserRouter>
    
    <Discord />
    <Footer />
    <BlogDetails />

    {/* <SubmitModal/> */}


  </>
  );
}

export default App;
