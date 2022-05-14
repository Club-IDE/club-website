import React from 'react'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import eye from '../../imgs/eye.svg'

export default function Share_Blog() {
  return (
    <>
     <div className="flex justify-center w-[100%] m-auto relative  lg:top-[-200px]">

          <a href='/' className="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto border-2">
            <FaLinkedinIn color='black' className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
            <span className="text-xs font-bold lg:text-xl md:text-lg">
              Share on Linkdin
            </span>
          </a>
          <a href='/' className="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto  border-2 ">
            <FaTwitter color='black' className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
            <span className="text-xs font-bold lg:text-xl md:text-lg">
              Share on Twitter
            </span>
          </a>
        </div>


      <div>
        <hr className='border-2 bg-primary border-primary mb-20 mt-36 lg:mt-0' />
        <img src={eye} alt="" className='w-20 m-auto relative top-[-115px]' />
      </div>
    </>
  )
}
