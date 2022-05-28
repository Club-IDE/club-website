import react, { useEffect } from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import calendar from '../imgs/CalendarIcon.png';
import blog from '../imgs/BlogIcon.png';
import newsletter from '../imgs/NewsletterIcon.png';
import aos from "aos";
import 'aos/dist/aos.css';
import Achievements from '../imgs/Achievments.png';
import { Link } from "react-router-dom";


const Student_Activities = (props) => {

  useEffect(() => {
    aos.init({duration : 1000});

  }, [])

    return (
        <section className="text-gray-600 body-font">
            <h2 className="text-[3rem] font-bold text-black text-center mt-28">Student Activities</h2>
            <div className="flex justify-center mx-auto mt-1 mb-7">
                        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                    </div>
        <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap -m-4">
            <div data-aos="flip-right" className="xl:w-1/4 md:w-1/2 p-4">
        <Link to="/eventpage">
              <div className="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors  cursor-pointer">
                <img className="h-24 w-24 object-center mb-6 object-cover" src={calendar} alt="content" />
                <h2 className="text-3xl text-white font-medium title-font mb-4 text-center">Live Events & Workshops</h2>
                <p className="leading-relaxed  text-white font-medium text-center px-6">Learn Something new almost everyday! </p>
              </div>
              </Link>
            </div>

            <div data-aos="flip-left" className="xl:w-1/4 md:w-1/2 p-4 ">
            <Link to="/blogpage">
              <div className="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors  cursor-pointer">
                <img className="h-24 w-24 object-center mb-6 object-cover" src={blog} alt="content" />
                <h2 className="text-3xl text-white font-medium title-font mb-4 text-center">Blogs</h2>
                <p className="leading-relaxed  text-white font-medium text-center px-6 pb-9">Let's Read! Today a reader, Tommorow a leader</p>
              </div>
            </Link>
            </div>
            <div data-aos="flip-right" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors cursor-pointer">
                <img className="h-24 w-24 object-center mb-6 object-cover" src={newsletter} alt="content" />
                <h2 className="text-3xl text-white font-medium title-font mb-4 text-center">Newsletter</h2>
                <p className="leading-relaxed  text-white font-medium text-center px-6 pb-10">Know what's going on in club Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div data-aos="flip-left" className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors cursor-pointer">
                <img className="h-24 w-24 object-center mb-6 object-cover" src={Achievements} alt="content" />
                <h2 className="text-3xl text-white font-medium title-font mb-4 text-center">Achievements</h2>
                <p className="leading-relaxed  text-white font-medium text-center px-6 pb-10">Take a look at our Hall of Fame Lorem ipsum dolor sit.</p>
              </div>
            </div>

        </div>
        </div>
      </section>
     );
}

export default Student_Activities;