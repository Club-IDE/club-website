// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Aboutus from '../imgs/Aboutus.png'
import Mission_vision from '../imgs/Mission_Vision.png'
import Group from '../imgs/Group.png'

const Hero = () => {
    return (
        <>
        <div className="container px-6 py-40 mx-auto  pt-32 pt lg:pt-28">

            <div className="items-center lg:flex">

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-2xl" src={Aboutus} alt="Catalogue-pana.svg"/>
                </div>


                    <div className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 className="text-primary text-5xl lg:text-6xl font- font-bold">About Us</h1>
                            <p className="mt-6 text-lg text-gray-500 ">It is an initiative by CE/IT Dept of GEC-Gn.
                            This is community for the student and by the student. Here the student grow their knowledge in a peer-to-peer learning environment and bulid solutions for local businesses and their community.  </p>
                        </div>
                    </div>

            </div>
                <div className="items-center lg:flex">

                        <div className="w-full lg:w-1/2">
                            <div className="mx-0 lg:max-w-2xl lg:mx-16">
                                <h1 className="text-primary text-5xl lg:text-6xl font- font-bold text-left">Our Mission & Vision </h1>
                                <p className="mt-6  text-lg text-gray-500">Our Mission and Vision to develop competencies in the field of technology among the students and help them get deeper dive in the field of the research and entrepreneurship.  </p>
                                 </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-2xl" src={Mission_vision} alt="Catalogue-pana.svg"/>
                        </div>

                </div>

                    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 class="text-5xl font-bold tracking-tight text-blue lg:text-6xl">
                            Join Our Growing Club
                        </h2>

                        <p class="block max-w-2xl mt-4 text-xl text-black dark:text-white pt-4 lg:pt-6">We love what we do and we do it with passion. We value the
                                        experimentation of the message and smart incentives.
                        </p>
                        <br/>
                        <br/>
                        <button className="w-full h-10 px-6 py-2 text-s text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold">See Current Openings </button>
                
                    </div>

                <div class="flex items-center justify-center w-full  mt-10 lg:mt-10 ">
                        <img class="w-full h-full " src={Group} alt="Catalogue-pana.svg"/>
                </div>    
        </div>


            </>

     );
}
export default Hero;