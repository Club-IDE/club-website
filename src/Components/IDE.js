import React from 'react'
import IDELogo from '../imgs/IDELogo.png'

export default function IDE() {
  return (
            <div className=' bg-gradient-to-bl from-secondary via-primary to-secondary  '>
          <div className="flex flex-col m-auto sm:max-w-xl md:max-w-full py-3">

              <a
                href="/"
                aria-label="View"
                className="inline-block  rounded-full"
              >

                  <img src={IDELogo} alt="" className='w-32 m-auto pb-4' />
              </a>
              <h2 className="font-sans mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none m-auto ">
                Club IDE
              </h2>
              <p className="font-mono text-bold text-white md:text-lg sm:px-4 leading-3 tracking-widest m-auto">
                Innovate | Devlop | Engage
              </p>
            </div>
          </div>


  );
}
