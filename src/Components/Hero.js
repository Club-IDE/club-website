// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Homepage_img from '../imgs/HomePageCommnity.png'


const Hero = (props) => {
    return (
        <>
        <div class="container px-6 py-40 mx-auto  pt-32 pt lg:pt-28">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 class="text-primary text-5xl lg:text-6xl font- font-bold">A Commuinty,
                                By the Students
                                For the Students</h1>
                            <p class="mt-6 text-gray-800  font-bold text-lg"><span className='text-primary'> Club IDE</span> is initiative by Governement Engineering College, Gandhinagar (CE/IT Department) for all the enthusiastic students of  institution.</p>
                            <button className="w-full h-10 px-3 py-2 mt-6 text-xs text-white uppercase transition-colors duration-200 transform bg-primary rounded-md lg:w-auto hover:bg-secondary font-bold">join us <IoMdArrowRoundForward className=" inline-block  font-bold pb-1 text-lg"/></button>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full lg:max-w-2xl" src={Homepage_img} alt="Catalogue-pana.svg"/>
                    </div>
                </div>
            </div>

    <section class="h-80 bg-gradient-to-r from-secondary via-primary to-secondary">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 class="text-5xl font-bold tracking-tight text-white lg:text-6xl">
                Why Club IDE ?
            </h2>

            <p class="block max-w-2xl mt-4 text-xl text-white dark:text-white pt-4 lg:pt-6">Our aim is to develop competencies in the field of technology among the students and help them dive deeper into the field of research and entrepreneurship.</p>

        </div>
    </section>

            </>

     );
}
export default Hero;