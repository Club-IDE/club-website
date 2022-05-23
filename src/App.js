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
import Sept21_Blog2 from './Components/Blogs/Sept21_Blog2';
import Sept21_Blog1 from './Components/Blogs/Sept21_Blog1';
import Oct21_Blog1 from './Components/Blogs/Oct21_Blog1';
import Oct21_Blog2 from './Components/Blogs/Oct21_Blog2';
import Nov21_Blog1 from './Components/Blogs/Nov21_Blog1';
import Nov21_Blog2 from './Components/Blogs/Nov21_Blog2';
import Dec21_Blog1 from './Components/Blogs/Dec21_Blog1';
import Dec21_Blog2 from './Components/Blogs/Dec21_Blog2';
import Jan22_Blog1 from './Components/Blogs/Jan22_Blog1';
import Jan22_Blog2 from './Components/Blogs/Jan22_Blog2';
import Feb22_Blog1 from './Components/Blogs/Feb22_Blog1';
import Feb22_Blog2 from './Components/Blogs/Feb22_Blog2';
import Mar22_Blog1 from './Components/Blogs/Mar22_Blog1';
import Mar22_Blog2 from './Components/Blogs/Mar22_Blog2';
import Apr22_Blog1 from './Components/Blogs/Apr22_Blog1';
import Apr22_Blog2 from './Components/Blogs/Apr22_Blog2';


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

    <Jan22_Blog1 />
    <Jan22_Blog2 />
    <Dec21_Blog1 />
    <Dec21_Blog2 />
    <Nov21_Blog1 />
    <Nov21_Blog2/>
    <Mar22_Blog1 />
    <Mar22_Blog2 />
    <Sept21_Blog1 />
    <Sept21_Blog2 />
    <Oct21_Blog1 />
    <Oct21_Blog2 />
    <Feb22_Blog2/>
    <Apr22_Blog1/>
    <Apr22_Blog2/>


    <SubmitModal/>




  </>
  );
}

export default App;
