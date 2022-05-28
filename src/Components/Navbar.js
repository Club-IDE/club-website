import { useState } from "react";
import Logo from '../imgs/IDELogo.png';
import GECG from '../imgs/GECG_logo.png'
import line from '../imgs/line.svg'
import { Sling as Hamburger } from 'hamburger-react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
    <div className="px-4 py-2 mx-auto mt-14 lg:mt-[-8px] md:max-w-full md:px-24 lg:px-24 shadow-lg bg-gradient-to-b from-secondary via-primary to-secondary lg:from-white lg:to-white z-50 fixed w-full">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="IDE"
          title="IDE"
          className="inline-flex items-center"
        >
          <img src={Logo} alt="logo" className='w-20 pl-1 hidden lg:inline-block' />
          <img src={line} alt="" className='h-16 hidden lg:inline-block' />
          <span className="ml-2 text-xl font-bold tracking-wide text-white lg:text-primary uppercase">
            Club IDE
          </span>
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex pr-16">
          <li>
            <Link
              to="/"
              className="font-bold text-gray-700 transition-colors duration-200 hover:text-primary hover:font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/activities"
              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary "
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              to="/blogpage"
              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/team"

              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              About Us
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <Hamburger color="White" toggled={isMenuOpen} toggle={setIsMenuOpen} />
          {isMenuOpen && (
            <div className="absolute top-20 left-0 w-full slideInRight ">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/activities"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Activities
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogpage"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutus"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 active:font-bold"
                      >
                        About us
                      </Link>
                    </li>

                  </ul>

                </nav>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/"
          aria-label="IDE"
          title="IDE"
          className="items-center hidden lg:inline-flex"
        >
          <img src={GECG} alt="logo" className='w-20 pl-1' />
        </Link>
      </div>
    </div>
    </>
  );
};

export default Navbar;