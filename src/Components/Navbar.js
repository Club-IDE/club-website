import React from 'react'
import logo from '../imgs/logo.png'
import line from '../imgs/line.svg'


export default function Navbar() {

  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='flex md-flex bg-white py-1 md:px-5 justify-between flex-wrap'>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-ide_color flex-wrap'>
            <img src={logo} alt="" className='w-20' />
            <img src={line} alt="" className='h-16  '/>
            <span className='px-3 text-site_color-400'>Club IDE</span>
            </div>
            <ul className=' hidden md:flex  my-auto mr-10 '>
                <li className=' mx-3 font-bold '><a href='/' className='hover:text-site_color-400'>HOME</a></li>
                <li className=' mx-3 text-site_color-400'><a href='/' className=''>ACTIVITES</a></li>
                <li className='inline-block mx-3 text-site_color-400'><a href='/' className='hover:text-site_color-400'>PARTNERS</a></li>
                <li className=' mx-3 text-site_color-400'><a href='/' className='hover:text-site_color-400'>BLOG</a></li>
                <li className=' mx-3 text-site_color-400'><a href='/' className='hover:text-site_color-400'>TEAM</a></li>
                <li className=' mx-3 text-site_color-400 '><a href='/' className='hover:text-site_color-400'>ABOUT</a></li>
            </ul>
                <div className="flex md:hidden">
                    <button type="button" className="text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">

                    </button>
                </div>
        </div>
    </div>

    </>
  )
}
