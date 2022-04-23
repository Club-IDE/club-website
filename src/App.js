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
import Team from './Team.js';



function App() {
  return (
  <>
  <Navbar />
  <Hero />
  <Members />
  <Course />
  <Activities />
  <Sponser />
  <Discord />
  <Aboutus />
  <Team />
  </>
  );
}

export default App;
