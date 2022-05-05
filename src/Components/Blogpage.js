import Bloglist from "./BlogList";
import BlogList_Horizontal from "./BlogList_Horizontal";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
const Blogpage = () => {
    return (
        <>
        <ScrollToTop />
        <div className="pt-32 ">
            <h1 className=" pb-4 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog</h1>
        </div>
        <div className="flex justify-evenly items-center ">
            <button className="mt-20 bg-gray-200 px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Technical</button>
            <button  className="mt-20 bg-gray-200 px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Non Technical</button>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-5 gap-0 items-center mt-0 lg:px-10 md:px-12  scale-[0.9]">
        <Bloglist/>
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