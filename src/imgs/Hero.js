
import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';


const Hero = (props) => {
    return ( 
        <div className="container px-6 py-16 mx-auto bg-back">
            <div className="items-center lg:flex mt-5 h-[80vh]">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg ml-[6.5rem]">
                        <p className="text-2xl font-bold dark:text-primary lg:text-[3.5rem] leading-[4rem]"><p>A Commuinty,</p> By the Students For the Students</p>
                        <p className="mt-[3rem] text-[1.3rem]  dark:text-black font-bold leading-7 " ><span className="text-primary">Club IDE</span> is initiative by Governement Engineering College, Gandhinagar (CE/IT Department) for all the enthusiastic students of  institution.</p>
                        <button className="w-full px-4 py-3 mt-6 text-[1rem] font-bold text-white uppercase transition-colors duration-200 transform bg-primary rounded-[15px] lg:w-auto hover:bg-secondary focus:outline-none focus:bg-secondary flex">join us <IoMdArrowRoundForward className="ml-3 mt-[0.5px] text-[1.4rem] font-bold"/></button>
                    </div>
                </div>
        
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img src={props.image} alt="illustration"/>
                </div>
            </div>
            <div className="text-center mt-32">
                <span className="text-primary font-bold text-[3.2rem]  block" >Why club IDE?</span>
                <p className="block font-bold text-2xl mx-[19rem] my-5">Our aim is to develop competencies in the field of technology among the students and help them dive deeper into the field of research and entrepreneurship.</p>
            </div>
        </div>
     );
}
 
export default Hero;