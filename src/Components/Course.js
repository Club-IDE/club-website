import React, { useEffect } from 'react'
import aos from "aos";
import 'aos/dist/aos.css';


export default function Course() {
    useEffect(() => {
        aos.init({duration : 2000});

      }, [])
    return (

        <section className="text-primary font-bold body-font">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-3xl font-bold text-center title-font text-gray-900 mb-4 md:text-5xl">Club IDE Revolves Around</h1>
                    <div className="flex justify-center mx-auto mt-1 mb-7">
                        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <div className=' my-5 w-80 h-16 border-4 border-primary rounded text-center pt-2 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>Web Devlopment</span>
                    </div>
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>Android Devlopment</span>
                    </div>
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>AI and ML</span>
                    </div>
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>CP Group</span>
                    </div>
                </div>


                <div className=" my-0 flex flex-wrap justify-evenly lg:my-10">
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>Entrepreneurship Group</span>
                    </div>
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>Robotics</span>
                    </div>
                    <div className='w-80 h-16 border-4 border-primary rounded text-center pt-2 my-5 lg:my-0 hover:text-white hover:bg-primary course_hover'>
                        <span className='text-2xl'>Internet of Things</span>
                    </div>
                </div>

            </div>

        </section>

    )
}
