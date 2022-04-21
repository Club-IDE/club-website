import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import calendar from '../imgs/CalendarIcon.png';
import blog from '../imgs/BlogIcon.png';
import newsletter from '../imgs/NewsletterIcon.png';
import Achievements from '../imgs/Achievments.png';


const Activities = (props) => {
    return ( 
        <section class="text-gray-600 body-font">
            <h2 className="text-[3rem] font-bold text-black text-center mt-28">Student Activities</h2>
        <div class="container px-5 py-24 mx-auto">
          
        <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors">
                <img class="h-24 w-24 object-center mb-6 object-cover" src={calendar} alt="content" />
                <h2 class="text-3xl text-white font-medium title-font mb-4 text-center">Live Events & Workshops</h2>
                <p class="leading-relaxed text-base text-white font-medium text-center px-6">Learn Something new almost everyday! </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 ">
              <div class="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors">
                <img class="h-24 w-24 object-center mb-6 object-cover" src={blog} alt="content" />
                <h2 class="text-3xl text-white font-medium title-font mb-4 mt-5">Blogs</h2>
                <p class="leading-relaxed text-base text-white font-medium text-center mt-4">Let's Read! Today a reader, Tommorow a leader</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors">
                <img class="h-24 w-24 object-center mb-6 object-cover" src={newsletter} alt="content" />
                <h2 class="text-3xl text-white font-medium title-font mt-5">Newsletter</h2>
                <p class="leading-relaxed text-base text-white font-medium text-center px-6 mt-12 pb-3">Know what's going on in club</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-primary hover:bg-secondary p-6 rounded-lg flex flex-col justify-center items-center transition-colors">
                <img class="h-24 w-24 object-center mb-6 object-cover" src={Achievements} alt="content" />
                <h2 class="text-3xl text-white font-medium title-font mb-4 mt-6">Achievements</h2>
                <p class="leading-relaxed text-base text-white font-medium text-center px-6 mt-4 pb-6">Take a look at our Hall of Fame</p>
              </div>
            </div>
            
        </div>
        </div>
      </section>
     );
}
 
export default Activities; 