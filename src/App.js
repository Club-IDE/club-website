import './App.css';
import Course from './Components/Course';
import Hero from './Components/Hero';
import Members from './Components/Members';
import Navbar from './Components/Navbar';
import Discord from './Components/Discord';
import Activities from './Components/Activities'
import Sponser from './Components/Sponsers';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import Team from './Components/Team.js';
import Blogpage from './Components/Blogpage';
import BackAnimations from './Components/BackAnimations'
import Blog_card from './Components/Blog_card';
import Bloglist from './Components/BlogList';
import MemberCard from './Components/MemberCard';




function App() {
  return (
    <>
  <BackAnimations />
  <Navbar />
  <Hero />
  <Members />

  <Course />
  <Activities />
  <Sponser />
  <Discord />
  <Footer />
  {/* <Blogpage />
  <Team />
  <Blog_card /> */}
  <Aboutus />

  </>
  );
}

export default App;
