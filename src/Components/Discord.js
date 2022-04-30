import React, { useEffect } from 'react'
import DiscordLogo from '../imgs/DiscordLogo.png'
import Vector from '../imgs/FooterVector.png'
import WhatsappLogo from '../imgs/WhatsappLogo.svg'
import InstagramLogo from '../imgs/InstagramLogo.svg'
import LinkedinLogo from '../imgs/LinkedinLogo.svg'
import aos from "aos";
import 'aos/dist/aos.css';

export default function Discord() {
    useEffect(() => {
        aos.init({duration : 2000});

      }, [])
    return (


        <section  className="bg-gradient-to-bl from-[#000004]  via-darkback to-[#000004] h-max">

            <div data-aos="fade-right"  className='pt-7 lg:pl-20 lg:flex flex-rows mt-8 xl:items-start xl:w-1/2 xl:mt-0 '>
                <img src={DiscordLogo} alt='DiscordLogo' className='w-32 m-auto lg:m-0' />
                <h2 className="w-max m-auto lg:m-0 text-3xl font-bold text-white xl:text-6xl lg:pt-10 lg:px-5">
                    Join Club IDE
                </h2>
            </div>
            <div  className="container flex flex-col items-center px-4  mx-auto xl:flex-row lg:px-20">


                <div data-aos="fade-right" className=" flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0 lg:pb-64">

                    <p className="block  mt-4 text-2xl text-gray-300 text-justify">A Student-friendly youth driven Community of practice,enabling collborative learning and sharing.  </p>

                    <div className="mt-12 sm:-mx-2 ">
                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                            <a href="#" className="inline-flex items-center justify-center w-full px-10 py-3 text-base font-medium text-white  bg-primary  hover:bg-secondary">

                                <span className="mx-2">
                                    Become a Member
                                </span>
                            </a>
                        </div>

                        <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 lg:ml-32 border-4 border-primary">
                            <a href="#" className="inline-flex items-center justify-center w-full px-10 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto">

                                <span className="mx-8">
                                    Join Discord
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center xl:w-1/2 lg:relative lg:bottom-48">
                    <img data-aos="fade-up" src={Vector} alt="Vectore imge" />
                </div>
            </div>
  <div className="container px-3 mx-auto lg:relative lg:-top-36 ">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-3xl sm:text-4xl  font-extrabold title-font mb-4 text-white">Get notified about <span className='text-yellow'> New Amazing Events</span></h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-gray-50 text-2xl pt-5">Do not miss any updates</p>
    </div>
    <div className="pb-0 flex w-max m-auto">
        <a href="/">
      <img src={WhatsappLogo} alt="" className='w-14 mx-5 lg:mx-10 icon'/>
      </a>
      <a href="/">
      <img src={InstagramLogo} alt="" className='w-14 mx-5 lg:mx-10 icon insta'/>
      </a>
      <a href="/">
      <img src={LinkedinLogo} alt="" className='w-14 mx-5 lg:mx-10  icon linkdin'/>
      </a>
    </div>

  </div>
  <div className='pb-7  lg:hidden'></div>
        </section>
    )
}
