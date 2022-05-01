// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Aboutus from '../imgs/Aboutus.gif'
import Mission_vision from '../imgs/Mission_Vision.gif'
import Group from '../imgs/Group.png'
import Discord from './Discord';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <>

        <div className=" container px-6 py-0 mx-auto  pt-32 pt lg:pt-28">

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

            </div>

                <div className=' bg-AboutBackground bg-cover bg-no-repeat px-6'>
                <div className="items-center lg:flex mt-10">

                        <div className="w-full lg:w-1/2 ">
                            <div className="mx-0 lg:max-w-2xl lg:mx-16">
                                <h1 className="text-primary text-5xl lg:text-6xl font- font-bold text-left">Our Mission & Vision </h1>
                                <p className="mt-6  text-lg text-gray-500">Our Mission and Vision to develop competencies in the field of technology among the students and help them get deeper dive in the field of the research and entrepreneurship.  </p>
                                 </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-[140%] h-[140%] lg:max-w-2xl" src={Mission_vision} alt="Catalogue-pana.svg"/>
                        </div>

                </div>

                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 className="text-5xl font-bold tracking-tight text-blue lg:text-6xl lg:mt-10">
                            Join Our Growing Club
                        </h2>

                        <p className=" py-10 block max-w-2xl mt-4 text-xl text-black lg:pt-6">We love what we do and we do it with passion. We value the
                                        experimentation of the message and smart incentives.
                        </p>
                        <br/>
                        <br/>
                        <button className="w-full h-10 px-6 py-2 text-s text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold">See Current Openings </button>

                    </div>

                <div className="flex items-center justify-center w-full  mt-10 lg:mt-10 ">
                        <img className="w-[90%] h-[90%] lg:w-[80%] lg:h-[80%] " src={Group} alt="Catalogue-pana.svg"/>
                </div>
        </div>

        <Discord />
        <Footer />
            </>

     );
}
export default AboutUs;