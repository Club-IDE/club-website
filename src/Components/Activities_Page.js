import React from 'react'
import Activities_Home from '../imgs/Activities_Home.gif'
import Blog from '../imgs/Blog.png'
import Achievement from '../imgs/Achievement.png'
import Newslatter from '../imgs/Newslatter.png'
import ScrollToTop from './ScrollToTop';
import ArrowDown from '../imgs/arrow_drop_down.svg'
import { getActiveElement } from '@testing-library/user-event/dist/utils';
import SubmitModal from './Modal'
import { Link } from 'react-router-dom';



export default function Activities_Page() {

    function openDropDown() {
        var open = document.getElementById('dropdown');


        var displaySetting = open.style.display;



        if (displaySetting == 'block') {

            open.style.display = 'none';
            document.getElementById('Arrowdown').style.transform  = "rotate(-90deg)"
        }
        else {

            open.style.display = 'block';
            document.getElementById('Arrowdown').style.transform  = "rotate(0deg)"

        }
    }

    return (
        <>
            <ScrollToTop />
            <section className="text-gray-600 body-font px-0 lg:px-20 py-20 mx-0 lg:mx-10">
                <div className="container mx-auto flex px-2 py-24  flex-col lg:flex-row items-center">
                    <div className="lg:flex-grow lg:text-left lg:w-1/2 lg:pr-16 flex flex-col items-center mb-16 md:mb-0 lg:items-start text-center">
                        <h1 className="title-font text-4xl md:text-5xl mb-4 font-bold lg:text-6xl text-gray-900">Let's <span className='text-primary'>Learn</span> And
                            <br className="hidden lg:inline-block" /><span className='text-primary'>Grow</span> Together
                        </h1>
                        <p className="my-10 leading-relaxed text-xl font-semibold">Learn new technologies and upgrade your skiils with <span className='text-primary'>Club IDE</span>. Stay updated with upcoming events </p>
                        <div className="flex justify-center">
                            <a href='/' className="w-full h-10 px-20 py-2 text-small text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold md:mb-20 rounded button-site">Explore</a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg w-[100%]">
                        <img className="object-cover object-center rounded" alt="hero" src={Activities_Home} />
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font  lg:px-20 mx-0 lg:mx-10">
                <div className="container mx-auto flex px-5  flex-col lg:flex-row items-center">
                    <div className="lg:flex-grow lg:text-left lg:w-1/2 lg:pr-16 flex flex-col items-center mb-16 md:mb-0 lg:items-start text-center">
                        <h1 className="title-font text-5xl mb-4 font-bold lg:text-6xl text-primary">Blogs
                        </h1>
                        <p className="my-10  lg:px-0 leading-relaxed text-xl font-semibold">Find useful learning resources, tech industries updates, self-growth tips & much more... </p>

                        <div className="mt-12 sm:-mx-2 ">
                            <div className="inline-flex w-full overflow-hidden shadow sm:w-auto sm:mx-2 mb-10">
                                <Link to="/BlogPage" className="inline-flex items-center justify-center w-full px-10 py-3 rounded text-base font-medium text-white button-site">

                                    <span className="">
                                        Checkout
                                    </span>
                                </Link>
                            </div>
                                <SubmitModal />
</div>

                    </div>
                    <div className="lg:max-w-lg w-[100%]">
                        <img className="object-cover object-center rounded" alt="hero" src={Blog} />
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font lg:px-0  mt-40 lg:mx-10">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
                    <div className="lg:max-w-lg w-[100%] mx-auto">
                        <img className="object-cover object-center rounded mb-20 lg:mb-20 w-[200%]" alt="hero" src={Achievement} />
                    </div>

                    <div className="lg:flex-grow lg:text-center lg:w-1/2  flex flex-col items-center lg:items-start text-center">
                        <h1 className="title-font text-5xl mb-4 font-bold lg:text-6xl text-primary m-auto">Achievements
                        </h1>
                        <p className="my-10 leading-relaxed text-xl font-semibold w-[95%] m-auto">Our Community members’ inspirational achievements are here....</p>

                        <div className="flex justify-center m-auto">
                            <a href='/' className="w-full  h-10 px-20 py-2 text-small text-white items-center  transition-colors duration-200 transform bg-primary  lg:w-auto hover:bg-secondary font-bold rounded button-site">Explore</a>

                        </div>
                    </div>

                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">

                        <h1 className="title-font text-5xl mb-4 font-bold text-gray-900">Subscribe To Our <span className='text-primary'>Newsletter</span></h1>
                        <p className="mb-8 leading-relaxed text-xl font-semibold">Never miss an update about industry, opportunities, scholarships, events, jobs and more!</p>
                        <div className="flex justify-center mx-auto mt-1 mb-7">
                        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                    </div>
                        <div className="flex justify-center">
                        </div>
                    </div>
                    <img className="w-[100%] lg:w-[65%] my-10 object-cover object-center rounded" alt="hero" src={Newslatter} />

                </div>

                <div>
                    <div className='w-max m-auto dropdown-header mb-20' onClick={openDropDown}>
                        <div className='w-64 py-2 pl-4  text-base rounded font-semibold text-center button-site'>

                        Latest Isuue of IDE Insiders <img src={ArrowDown} className="w-8 relative bottom-[1px] inline-block Arrowdown" id='Arrowdown' />
                        </div>
                            <ul className=" py-1 text-sm text-gray-700 text-center p-4 bg-white shadow-lg w-64 dropdown" id='dropdown'>

                                <li>
                                    <a href="https://drive.google.com/file/d/1Ye6yeNgYGNi6ic3yIDPqpogPCSJDYu2M/view?usp=sharing" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Mar'22</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1R_mIq8WuGSVTiA5hT5-X44tWK5U8YeWi/view?usp=sharing" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Feb'22</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/10ZTFaF7GQKRSjuOJncx2Cp_Xzh6So3yf/view?usp=sharing" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Jan'22</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1F1uGeMrMwykIRh9nuMfTcZelo85swOb7/view?usp=sharing" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Dec'21</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/u/1/d/15H4cRKjKrII8w5nojBrOmNjpdRWvn0C9/view" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Nov'21</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1fg9UtYbwoo2xg1eVH_nsALGOyOAVUdnq/view?usp=sharing" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Oct'21</a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/11Sos5fmbVJwwj9ihCNj2MI6ijPGjp6r-/view" target="_blank" className="block px-4 py-2 hover:bg-gray-100 border-b-[1px] font-semibold">IDE NewsLatter Sep'21</a>
                                </li>
                            </ul>

                    </div>
                </div>
            </section>





        </>
    )
}
