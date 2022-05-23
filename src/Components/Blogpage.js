import Bloglist from "./BlogList";
import BlogList_Horizontal from "./BlogList_Horizontal";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";
import Sep21_Blog1_img from '../imgs/Blog_Imgs/Post_Imgs/sept21_1.jpg'
import Sept21_Blog1 from './Blogs/Sept21_Blog1'


const Blogpage = () => {
    return (
        <>
     <ScrollToTop />

        <div className="pt-32 ">
            <h1 className=" pb-4 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog</h1>
        </div>
        <div className="flex justify-evenly items-center ">
            <button className="mt-20 bg-white shadow-lg shadow-gray-600 px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Technical</button>
            <button  className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Non Technical</button>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-5 gap-0 items-center mt-0 lg:px-10 md:px-12  scale-[0.9]">
        <Bloglist img = {Sep21_Blog1_img} category = " Motivational " date = "Sep 2021" BlogName = "Motivation comes from within" Desc = "Many times people think that motivation comes from reading inspirational stories, watching real-life inspired movies, hearing motivational speakers, etc." link = "/Sept21_Blog1" />
        <Bloglist/>
        <Bloglist/>
        <BlogList_Horizontal />
        <Bloglist/>
        <Bloglist/>
        <Bloglist/>
        <BlogList_Horizontal />

        </div>


        </>
     );
}

export default Blogpage;