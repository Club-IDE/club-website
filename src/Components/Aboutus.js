// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Aboutus from '../imgs/Aboutus.png'
import Mission_vision from '../imgs/Mission_Vision.png'


const Hero = () => {
    return (
        <>
        <div className="container px-6 py-40 mx-auto  pt-32 pt lg:pt-28">

                <div className="items-center lg:flex">

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full lg:max-w-2xl" src={Aboutus} alt="Catalogue-pana.svg"/>
                    </div>


<<<<<<< HEAD
                    <div class="w-full lg:w-1/2">
                        <div class="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 class="text-black text-5xl lg:text-6xl font- font-bold">About Us</h1>
                            <p class="mt-6 text-lg text-gray-500 ">It is an initiative by CE/IT Dept of GEC-Gn. 
=======
                    <div className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 className="text-primary text-5xl lg:text-6xl font- font-bold">About Us</h1>
                            <p className="mt-6 text-lg text-gray-500 ">It is an initiative by CE/IT Dept of GEC-Gn.
>>>>>>> efc6062ed35c538d928a394c31d86d6b29bfda70
                            This is community for the student and by the student. Here the student grow their knowledge in a peer-to-peer learning environment and bulid solutions for local businesses and their community.  </p>
                             </div>
                    </div>

                </div>
<<<<<<< HEAD
                <div class="items-center lg:flex">
                
                        <div class="w-full lg:w-1/2">
                            <div class="mx-0 lg:max-w-2xl lg:mx-16">
                                <h1 class="text-black text-5xl lg:text-6xl font- font-bold text-left ">Our Mission & Vision </h1>
                                <p class="mt-6  text-lg text-gray-500">Our Mission and Vision to develop competencies in the field of technology among the students and help them get deeper dive in the field of the research and entrepreneurship.  </p>
=======
                <div className="items-center lg:flex">

                        <div className="w-full lg:w-1/2">
                            <div className="mx-0 lg:max-w-2xl lg:mx-16">
                                <h1 className="text-primary text-5xl lg:text-6xl font- font-bold text-left">Our Mission & Vision </h1>
                                <p className="mt-6  text-lg text-gray-500">Our Mission and Vision to develop competencies in the field of technology among the students and help them get deeper dive in the field of the research and entrepreneurship.  </p>
>>>>>>> efc6062ed35c538d928a394c31d86d6b29bfda70
                                 </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-2xl" src={Mission_vision} alt="Catalogue-pana.svg"/>
                        </div>

                    </div>
            </div>


            </>

     );
}
export default Hero;