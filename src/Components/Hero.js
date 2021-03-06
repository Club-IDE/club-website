// import react from "react";
import { IoMdArrowRoundForward } from 'react-icons/io';
import Homepage_img from '../imgs/HomePageCommnity.png'
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Hero = (props) => {
    useEffect(() => {
        aos.init({duration : 2000});
        aos.init({
            once: true,
            });
      }, [])
    return (
        <>
        <div className="container px-6 py-40 mx-auto  pt-40 lg:pt-28">
                <div  className="items-center lg:flex xl:mt-16">
                    <div data-aos="zoom-in" className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <h1 className="text-primary text-5xl lg:text-6xl font- font-bold">A Commuinty,
                                By the Students
                                For the Students</h1>
                            <p className="mt-6 text-gray-800  font-bold text-lg"><span className='text-primary'> Club IDE</span> is initiative by Governement Engineering College, Gandhinagar (CE/IT Department) for all the enthusiastic students of  institution.</p>
                            <a href="https://drive.google.com/file/d/15mFHXusz_QFfxvFOkBM9lpc5CSmHXc4f/view" target='_blank'>
                            <button className="w-full h-10 px-8 py-2 mt-6 text-xs text-white uppercase transition-colors duration-200 transform bg-primary rounded-md lg:w-auto hover:bg-secondary font-bold button-site">Know more <IoMdArrowRoundForward className=" inline-block  font-bold pb-1 text-lg"/></button></a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="pt-12 w-full h-full lg:max-w-4xl md:pt-10 lg:pt-0" src={Homepage_img} alt="Catalogue-pana.svg"/>
                    </div>
                </div>
            </div>

    <section data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2000"  className="h-80 bg-gradient-to-b from-secondary via-primary to-secondary">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
                Why Club IDE ?
            </h2>

            <p className="block max-w-2xl mt-4 text-xl text-white dark:text-white pt-4 lg:pt-6">Our aim is to develop competencies in the field of technology among the students and help them dive deeper into the field of research and entrepreneurship.</p>

        </div>
    </section>

            </>

     );
}
export default Hero;