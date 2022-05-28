import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Team from './Components/Team';
import AboutUs from './Components/Aboutus';
import Blogpage from './Components/Blogpage';
import Discord from './Components/Discord';
import Footer from './Components/Footer';
import Activities_Page from './Components/Activities_Page'
import Eventpage from './Components/EventPage'
import Sept21_Blog1 from './Components/Blogs/Sept21_Blog1';
import GECG from './Components/GECG';
import Sept21_Blog2 from './Components/Blogs/Sept21_Blog2'
import Nov21_Blog2 from './Components/Blogs/Nov21_Blog2'
import Mar22_Blog1 from './Components/Blogs/Mar22_Blog1';
import Mar22_Blog2 from './Components/Blogs/Mar22_Blog2';
import Feb22_Blog1 from './Components/Blogs/Feb22_Blog1';
import Feb22_Blog2 from './Components/Blogs/Feb22_Blog2';
import Jan22_Blog1 from './Components/Blogs/Jan22_Blog1';
import Jan22_Blog2 from './Components/Blogs/Jan22_Blog2';
import Dec21_Blog1 from './Components/Blogs/Dec21_Blog1';
import Dec21_Blog2 from './Components/Blogs/Dec21_Blog2';
import Nov21_Blog1 from './Components/Blogs/Nov21_Blog1';
import Oct21_Blog1 from './Components/Blogs/Oct21_Blog1';
import Oct21_Blog2 from './Components/Blogs/Oct21_Blog2';
import Apr22_Blog2 from './Components/Blogs/Apr22_Blog2';
import Apr22_Blog1 from './Components/Blogs/Apr22_Blog1';
import PreLoader from './Components/PreLoader';
import { useEffect, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [ Loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, []);

  return (
    <>
      {
        Loading ?
          <PreLoader />
          :
          <>
            <BrowserRouter>
              <GECG />
              <Navbar />
              <ScrollToTop color='white' width='40'  smooth />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/activities' element={<Activities_Page />} />
                <Route path='/team' element={<Team />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/blogpage' element={<Blogpage />} />

                <Route path='/blogpage/1042022' element={<Apr22_Blog1 />} />
                <Route path='/blogpage/2042022' element={<Apr22_Blog2 />} />
                <Route path='/blogpage/1032022' element={<Mar22_Blog1 />} />
                <Route path='/blogpage/2032022' element={<Mar22_Blog2 />} />
                <Route path='/blogpage/1022022' element={<Feb22_Blog1 />} />
                <Route path='/blogpage/2022022' element={<Feb22_Blog2 />} />
                <Route path='/blogpage/1012022' element={<Jan22_Blog1 />} />
                <Route path='/blogpage/2012022' element={<Jan22_Blog2 />} />
                <Route path='/blogpage/1122021' element={<Dec21_Blog1 />} />
                <Route path='/blogpage/2122021' element={<Dec21_Blog2 />} />
                <Route path='/blogpage/1112021' element={<Nov21_Blog1 />} />
                <Route path='/blogpage/2112021' element={<Nov21_Blog2 />} />
                <Route path='/blogpage/1102021' element={<Oct21_Blog1 />} />
                <Route path='/blogpage/2102021' element={<Oct21_Blog2 />} />
                <Route path='/blogpage/1092021' element={<Sept21_Blog1 />} />
                <Route path='/blogpage/2092021' element={<Sept21_Blog2 />} />



                <Route path='/eventpage' element={<Eventpage />} />


              </Routes>
            </BrowserRouter>

            <Discord />
            <Footer />
          </>



}
  </>
  );
}

export default App;
