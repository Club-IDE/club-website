import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Logo from '../imgs/IDELogo.png';
import GECG_IMG from '../imgs/GECG_logo.png'
import line from '../imgs/line.svg'

export default function GECG() {
  return (
    <div className="bg-white flex justify-between px-2 border-2 w-full fixed z-[51] lg:border-none">
        <div className='flex lg:hidden ml-2 md:ml-24'>
         <img src={Logo} alt="logo" className='w-14 h-14' />
          </div>
          <div className=' flex flex-col justify-center lg:hidden'>
          <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
          An initiative by
          </span>
          </div>
    <Link
          to="/"
          aria-label="IDE"
          title="IDE"
          className="items-center lg:hidden mr-0 md:mr-24"
        >
          <img src={GECG_IMG} alt="logo" className='w-14 z-40' />
        </Link>
    </div>
  )
}
