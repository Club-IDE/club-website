import '../App.css';
import Course from './Course';
import Hero from './Hero';
import Members from './Members';
import Navbar from './Navbar';
import Discord from './Discord';
import Activities from './Activities'
import Sponser from './Sponsers';
import AboutUs from './Aboutus';
import Footer from './Footer';
import Team from './Team.js';
import Blogpage from './Blogpage';
import BackAnimations from './BackAnimations';
import { Carousel } from '@trendyol-js/react-carousel';
import Example from './MemberCard';
import Blog_card from './Blog_card';
import { Routes, Route, Outlet, Link } from "react-router-dom";






function HomePage() {
  return (
    <>
  <Hero />
  <Members />
  <Course />
  <Activities />
  <Sponser />
  <Discord />
  <Footer />
  </>
  );
}

export default HomePage;
