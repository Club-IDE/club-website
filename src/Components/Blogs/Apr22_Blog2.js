import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Aditya Chaturvedi.jpg'

import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/apr22_2.jpg'
import Img1 from '../../imgs/In_Blog_Imgs/apr22_blog2_1.jpg'
import Share_Blog from './Share_Blog';
import ScrollToTop from '../ScrollToTop';

export default function Apr22_Blog2() {
  return (
    <>
    <ScrollToTop />
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8 ">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>JUST Follow Up</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#JamesWebbSpaceTelescope</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#NASA</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#UnfoldTheUniverse</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#space</span>
          </div>
        <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Aaditya Chaturvedi</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~IT Batch 2k24 | 5 min read</h2>
            </span>
        </div>

        <div className='pt-5'>
            <div className='text-base'>
            We humans have been long intrigued with stars and galaxies to a point where space is a grene to many fictional works with titles like "Star Wars", and many space explorations.
            </div>
        </div>
            <div className='pt-5'>
                <div className="imagebox flex flex-wrap md:flex-nowrap lg:flex-nowrap">
                    <div className='text-img'>
                    Here is one of the most important space exploration missions of our decade, JWST was in the works for the last 20 years. It is as big as our volleyball ground and colder than the nitro biscuit that you ate last year. It can peek into the past as it can read the faintest of the infrared. This trendy design is more complicated than a honey bee's comb and folds like origami.<br></br><br></br>
                    Cool looking and brain-teasing are just some of its features.<br></br><br></br>
                    Nasa launched its latest "Star Hunter", last year Christmas. It was in workings for the last 20 years. It is quite a powerful and cool piece of technology, humans have been sent into space.
                    </div>
                <div>
                    <img src={Img1} className="center" width="65%" height="65%"></img>
                </div>
            </div>
        </div>
          <div className='pt-5'>
            <div className='text-base'>
            To start working it needed 6 months of preparations. It is now in its final stage.
            </div>
          </div>

        </div>

        <Share_Blog />
       </div>




    </>
  )
}
