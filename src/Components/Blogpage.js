import Bloglist from "./BlogList";
import BlogList_Horizontal from "./BlogList_Horizontal";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";
import Sep21_Blog1_img from '../imgs/Blog_Imgs/Post_Imgs/sept21_1.jpg'
import Sept21_Blog1 from './Blogs/Sept21_Blog1'
import BlogCard from "./BlogCard";
import Blog2 from "../imgs/Blog_Imgs/Post_Imgs/nov21_2.jpg";
import Blog1 from '../imgs/Blog_Imgs/Post_Imgs/sept21_1.jpg';


const Blogpage = () => {

    const blogCards = [
        {
          id: 1,
          backImage: Blog2 ,
          date:'Nov-21',
          title: 'History of Web',
          type: 'Technical',
          desc:`We are constantly connected to devices. These devices communicate with each other to make our lives easier. We've become so immersed in technology that we don't even notice that a simple smartwatch app is replacing heavier equipment to keep our health vitals in check.`,
        },
        {
          id: 2,
          backImage: Blog1 ,
          date:'sep-21',
          title: 'Motivation comes from within',
          type: 'Motivational',
          desc:`Many times people think that motivation comes from reading inspirational stories, watching real-life inspired movies, hearing motivational speakers.`,
        },
      ];
    return (
        <>
       
     <ScrollToTop />

        <div className="pt-32 ">
            <h1 className=" pb-4 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blogs</h1>
        </div>
        <div className="flex justify-evenly items-center ">
            <button className="mt-20 bg-white shadow-lg shadow-gray-600 px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Technical</button>
            <button  className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Non Technical</button>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-5 gap-0 items-center mt-0 lg:px-10 md:px-12  scale-[0.9]"> 
        
            <BlogCard data_blogcard={blogCards}/>
            
            
            
            {/* <Routes>
                <Route path='sept21_blog1' element={<Sept21_Blog1 />}></Route>
            </Routes> */}
        </div>


        </>
     );
}

export default Blogpage;