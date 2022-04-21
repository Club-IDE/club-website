import React from 'react'
import DiscordLogo from '../imgs/DiscordLogo.png'
import Vector from '../imgs/FooterVector.png'
import WhatsappLogo from '../imgs/WhatsappLogo.svg'
import InstagramLogo from '../imgs/InstagramLogo.svg'
import LinkedinLogo from '../imgs/LinkedinLogo.svg'

export default function Discord() {
    return (

        <section className=" bg-darkback h-max">
            <div className='pt-7 lg:pl-20 lg:flex flex-rows mt-8 xl:items-start xl:w-1/2 xl:mt-0'>
                <img src={DiscordLogo} alt='DiscordLogo' className='w-32 m-auto lg:m-0' />
                <h2 className="w-max m-auto lg:m-0 text-3xl font-bold text-white xl:text-6xl lg:pt-10 lg:px-5">
                    Join Club IDE
                </h2>
            </div>
            <div className="container flex flex-col items-center px-4  mx-auto xl:flex-row lg:px-20">


                <div className=" flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0 lg:pb-64">

                    <p className="block  mt-4 text-2xl text-gray-300 text-justify">A Student-friendly youth driven Community of practice,enabling collborative learning and sharing.  </p>

                    <div className="mt-12 sm:-mx-2 ">
                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-secondary to-primary hover:from-secondary hover:to-blue-900 sm:w-auto">

                                <span className="mx-2">
                                    Become a Member
                                </span>
                            </a>
                        </div>

                        <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 lg:ml-32">
                            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">

                                <span className="mx-8">
                                    Join Discord
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center xl:w-1/2 lg:relative lg:bottom-48">
                    <img src={Vector} alt="Vectore imge" />
                </div>
            </div>
  <div class="container px-5 mx-auto lg:relative lg:-top-36 ">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="text-3xl sm:text-4xl  font-extrabold title-font mb-4 text-white">Get notified about <span className='text-yellow'> New Amazing Events</span></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed  text-gray-50 text-2xl pt-5">Do not miss any updates</p>
    </div>
    <div class="flex w-max m-auto ">
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
        </section>
    )
}
