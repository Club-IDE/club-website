import { useState } from "react";
import Logo from '../imgs/IDELogo.png';
import line from '../imgs/line.svg'
import { Sling as Hamburger } from 'hamburger-react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="px-4 py-2 mx-auto  md:max-w-full md:px-24 lg:px-8 shadow-lg bg-white z-50 fixed w-full">
      <div className="relative flex items-center justify-between lg:pl-16">
        <Link
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={Logo} alt="logo" className='w-20 pl-1' />
          <img src={line} alt="" className='h-16  ' />
          <span className="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
            Club IDE
          </span>
        </Link>
        <ul className=" items-center hidden space-x-8 lg:flex pr-16">
          <li>
            <Link
              to="/"
              className=" text-gray-700 transition-colors duration-200 hover:text-primary hover:font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/activities"
              className="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary "
            >
              Activities
            </Link>
          </li>
          <li>
            <Link
              to="/partneres"
              className="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/team"

              className="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold hover:text-primary"
            >
              About Us
            </Link>
          </li>
        </ul>


        <div className="lg:hidden">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
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
                        to="/partners"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Partners
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
      </div>
    </div>
  );
};

export default Navbar;