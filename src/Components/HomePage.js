import '../App.css';
import Course from './Course';
import Hero from './Hero';
import Members from './Members';
import Navbar from './Navbar';
import Discord from './Discord';
import Student_Activities from './Student_Activities'
import Sponser from './Sponsers';
import AboutUs from './Aboutus';
import Footer from './Footer';
import Team from './Team.js';
import Blogpage from './Blogpage';
import BackAnimations from './BackAnimations';
import { Carousel } from '@trendyol-js/react-carousel';
import Example from './MemberCard';

import { Routes, Route, Outlet, Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop';






function HomePage() {
  return (
    <>
  <ScrollToTop />
  <Hero />
  <Members />
  <Course />
  <Student_Activities />
  <Sponser />

  </>
  );
}

export default HomePage;
