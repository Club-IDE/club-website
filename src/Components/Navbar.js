import { useState } from "react";
import Logo from '../imgs/IDELogo.png';
import line from '../imgs/line.svg'
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  return (
    <div class="px-4 py-2 mx-auto  md:max-w-full md:px-24 lg:px-8 shadow-lg bg-white z-50 fixed w-full">
      <div class="relative flex items-center justify-between lg:pl-16">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <img src={Logo} alt="logo" className='w-20 pl-1' />
          <img src={line} alt="" className='h-16  ' />
          <span class="ml-2 text-xl font-bold tracking-wide text-primary uppercase">
            Club IDE
          </span>
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex pr-16">
          <li>
            <a
              href="/"
              class="font-bold tracking-wide text-primary transition-colors duration-200 hover:text-primary hover:font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              class="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:font-bold"
            >
              Avtivities
            </a>
          </li>
          <li>
            <a
              href="/"
              class="font-normal tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 hover:font-bold"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="/"

              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
            >
              blog
            </a>
          </li>
          <li>
            <a
              href="/"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 "
            >
              About Us
            </a>
          </li>
        </ul>


        <div class="lg:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          {isMenuOpen && (
            <div class="absolute top-20 left-0 w-full slideInRight ">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        class="font-bold tracking-wide text-primary transition-colors duration-200 "
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Avtivities
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </a>
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