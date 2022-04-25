import Bloglist from "./BlogList";
const Blogpage = () => {
    return ( 
        <> 
        
        <div className="flex justify-evenly items-center ">
            <button className="mt-32 bg-white px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Technical</button>
            <button  className="mt-32 bg-white px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Non Technical</button>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-5 gap-3 items-center mt-10 lg:px-16 md:px-12">
        <Bloglist /> 
        <Bloglist /> 
        <Bloglist /> 
        </div>
    
            
        </>
     );
}
 
export default Blogpage;