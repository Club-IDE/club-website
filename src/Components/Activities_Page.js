import React from 'react'
import Activities_Home from '../imgs/Activities_Home.gif'
import { IoMdArrowRoundForward } from 'react-icons/io';
import Blog from '../imgs/Blog.png'
import Achievement from '../imgs/Achievement.png'

export default function Activities_Page() {
    return (
        <>
            <section class="text-gray-600 body-font px-0 lg:px-20 py-20 mx-0 lg:mx-10">
                <div class="container mx-auto flex px-2 py-24  flex-col lg:flex-row items-center">
                    <div class="lg:flex-grow lg:text-left lg:w-1/2 lg:pr-16 flex flex-col items-center mb-16 md:mb-0 lg:items-start text-center">
                        <h1 class="title-font text-4xl md:text-5xl mb-4 font-bold lg:text-6xl text-gray-900">Let's <span className='text-primary'>Learn</span> And
                            <br class="hidden lg:inline-block" /><span className='text-primary'>Grow</span> Together
                        </h1>
                        <p class="my-10 leading-relaxed text-xl font-semibold">Learn new technologies and upgrade your skiils with <span className='text-primary'>Club IDE</span>. Stay updated with upcoming events </p>
                        <div class="flex justify-center">
                            <a href='/' class="w-full h-10 px-20 py-2 text-small text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold md:mb-20">Explore</a>

                        </div>
                    </div>
                    <div class="lg:max-w-lg w-[100%]">
                        <img class="object-cover object-center rounded" alt="hero" src={Activities_Home} />
                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font  lg:px-20 mx-0 lg:mx-10">
                <div class="container mx-auto flex px-5  flex-col lg:flex-row items-center">
                    <div class="lg:flex-grow lg:text-left lg:w-1/2 lg:pr-16 flex flex-col items-center mb-16 md:mb-0 lg:items-start text-center">
                        <h1 class="title-font text-5xl mb-4 font-bold lg:text-6xl text-primary">Blogs
                        </h1>
                        <p class="my-10  lg:px-0 leading-relaxed text-xl font-semibold">Find useful learning resources, tech industries updates, self-growth tips & much more... </p>

                        <div className="mt-12 sm:-mx-2 ">
                            <div className="inline-flex w-full overflow-hidden shadow sm:w-auto sm:mx-2 mb-10">
                                <a href="#" className="inline-flex items-center justify-center w-full px-10 py-3 text-base font-medium text-white  bg-primary  hover:bg-secondary">

                                    <span className="">
                                        Checkout
                                    </span>
                                </a>
                            </div>
                            <div className="inline-flex w-full overflow-hidden shadow sm:w-auto  border-4 ml-0 lg:ml-5 border-primary">
                                <a href="#" className="inline-flex items-center justify-center w-full px-10 py-2 text-base font-medium text-white  bg-primary  hover:bg-secondary">

                                    <span className="py-[1px]">
                                        Submit <IoMdArrowRoundForward className=" inline-block  font-bold pb-1 text-lg ml-3"/>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-lg w-[100%]">
                        <img class="object-cover object-center rounded" alt="hero" src={Blog} />
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font lg:px-0  my-40 lg:mx-10">
                <div class="container mx-auto flex flex-col lg:flex-row items-center justify-around">
                    <div class="lg:max-w-lg w-[100%] mx-auto">
                        <img class="object-cover object-center rounded mb-20 lg:mb-20 w-[200%]" alt="hero" src={Achievement} />
                    </div>

                    <div class="lg:flex-grow lg:text-center lg:w-1/2  flex flex-col items-center lg:items-start text-center">
                        <h1 class="title-font text-5xl mb-4 font-bold lg:text-6xl text-primary m-auto">Achievements
                        </h1>
                        <p class="my-10 leading-relaxed text-xl font-semibold w-[95%] m-auto">Our Community members’ inspirational achievements are here....</p>

                        <div class="flex justify-center m-auto">
                            <a href='/' class="w-full  h-10 px-20 py-2 text-small text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold ">Explore</a>

                        </div>
                    </div>

                </div>
            </section>






        </>
    )
}
