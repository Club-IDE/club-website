
import { Link, useParams } from "react-router-dom";


const Bloglist = (props) => {
  

    return (


      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card hover:drop-shadow-xl lg:w-[30%] w-[90%] mx-2 my-5">
            <Link to={`/blogpage/${props.link}`}>
            <img
              src={props.img}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title=""
                >
                  {props.category}
                </span>
                <span className="text-gray-600">— {props.date}</span>
              </p>
              {/* <Link to={props.link}>
                <div
                 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">

                {props.BlogName}
                </div>
              </Link> */}
              <p className="mb-2 text-gray-700">
                {props.Desc}
              </p>
              {/* <Link to= {LinkOfBlog}>
                <div aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more ➡️
                </div>
              </Link> */}
            </div>
          </Link>
          </div>



    );
  };


  export default Bloglist;