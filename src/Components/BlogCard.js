import { Link } from "react-router-dom";
import aos from "aos";
import 'aos/dist/aos.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const BlogCard = ({ data_blogcard }) => {
  const blogcards = data_blogcard;
  return (
    <>


    {blogcards.map(blogcard => {
        aos.init({
            duration: 500,
          once: true,
          });

        return (

            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card hover:drop-shadow-xl lg:w-[30%] w-[90%]  mx-auto my-10 h-max lg:h-[550px] event-shadow" key={blogcard.id}>
              <Link to={`/blogpage/${blogcard.id}`}>
                <LazyLoadImage
                  effect="blur"
                  src={blogcard.backImage}
                  className="object-cover w-full h-64"
                  alt=""
                  width='100%'
                  useIntersectionObserver='true'
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

                  <p className="mb-2 text-gray-700 text-justify">
                    {blogcard.desc.slice(0 , 297)}
                  </p>

                  <div aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                    Read more ➡️
                  </div>

                </div>
              </Link>
            </div>

)

        // else{
        //   return (

        //     <Link to={`/blogpage/${blogcard.id}`}>
        //     <div data-aos = "zoom-in" className=" lg:flex overflow-hidden transition-shadow duration-300 bg-white rounded  blog-card  lg:w-[95%] w-[90%] mx-auto event-shadow" key={blogcard.id} >
        //         <img

        //           src={blogcard.backImage}
        //           className="object-cover w-full h-72 max-w-md max-h-46"
        //           alt=""
        //           />
        //         <div className="p-5 border border-t-0">
        //           <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        //             <span
        //               href="/"
        //               className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
        //               aria-label="Category"
        //               title="traveling"
        //               >
        //               {`${blogcard.type}`}
        //             </span>
        //             <span className="text-gray-600">— {blogcard.date}</span>
        //           </p>
        //           <div
        //             className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
        //             {blogcard.title}
        //           </div>
        //           <p className="my-4 text-gray-700 text-justify">
        //             {blogcard.desc.slice(0 , 490)}
        //           </p>
        //           <div

        //             className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        //             >
        //             Read more ➡️
        //           </div>
        //         </div>
        //     </div>
        //     </Link>



        //   );
        // }
      })}
      </>


);
}
export default BlogCard;