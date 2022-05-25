import { Link } from "react-router-dom";
const BlogCard = ({data_blogcard}) => {
        const blogcards = data_blogcard;
        return (
            <>
            {blogcards.map(blogcard=>{
                
                return(
                    
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card hover:drop-shadow-xl lg:w-[30%] w-[90%] mx-2 my-5 h-[550px]" key={blogcard.id} >
                <Link to={`/blogpage/${blogcard.id}`}>
                <img
                src={blogcard.backImage}
                className="object-cover w-full h-64"
                alt=""
                />
                <div className="p-5 flex-col justify-evenly content-evenly">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span
                      href="/"
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title=""
                      >
                      {`${blogcard.type}`}
                    </span>
                    <span className="text-gray-600">— {blogcard.date}</span>
                  </p>
                  
                    <div
                     className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
      
                    {blogcard.title}
                    </div>
                  
                  <p className="mb-2 text-gray-700">
                    {blogcard.desc}
                  </p>
                
                    <div aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                    Learn more ➡️
                    </div>
                
                    </div>
                    </Link>
                    </div>
                    
        )
        })}
        </>
              );
            } 
export default BlogCard;