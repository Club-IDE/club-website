// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Aboutus from '../imgs/Aboutus.png'
import Mission_vision from '../imgs/Mission_Vision.png'


const Hero = () => {
    return (
        <>
        <div class="container px-6 py-40 mx-auto  pt-32 pt lg:pt-28">

                <div class="items-center lg:flex">
                    
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-2xl" src={Aboutus} alt="Catalogue-pana.svg"/>
                    </div>


                    <div class="w-full lg:w-1/2">
                        <div class="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 class="text-primary text-5xl lg:text-6xl font- font-bold  text-black">About Us</h1>
                            <p class="mt-6 text-lg text-gray-500 ">It is an initiative by CE/IT Dept of GEC-Gn. 
                            This is community for the student and by the student. Here the student grow their knowledge in a peer-to-peer learning environment and bulid solutions for local businesses and their community.  </p>
                             </div>
                    </div>

                </div>
                <div class="items-center lg:flex">
                
                        <div class="w-full lg:w-1/2">
                            <div class="mx-0 lg:max-w-2xl lg:mx-16">
                                <h1 class="text-primary text-5xl lg:text-6xl font- font-bold text-left text-black">Our Mission & Vision </h1>
                                <p class="mt-6  text-lg text-gray-500">Our Mission and Vision to develop competencies in the field of technology among the students and help them get deeper dive in the field of the research and entrepreneurship.  </p>
                                 </div>
                        </div>
                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full lg:max-w-2xl" src={Mission_vision} alt="Catalogue-pana.svg"/>
                        </div>
    
                    </div>
            </div>

   
            </>

     );
}
export default Hero;