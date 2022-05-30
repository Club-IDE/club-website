import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Ayush Solanki.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/sept21_2.png'
import Share_Blog from './Share_Blog';
import Img from '../../imgs/In_Blog_Imgs/sept21_blog2.png'
import ScrollToTop from '../ScrollToTop';

export default function Sept21_Blog2() {
  return (
    <>
      <ScrollToTop />
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Internet Of Things</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#iot</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#InternetOfThings</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#automation</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#technology</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Ayush Solanki</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~IT Batch-2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            As the word itself describes, the Internet of Things (IoT), is a technology that connects real-world objects or things to the Internet. These objects are controlled using a smartphone through the Internet. Various sensors are used for the detection of different factors.
            </div>
          </div>

          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
                Sensors can sense the human presence, atmospheric pressure, soil state, human body status etc. Sensors are connected with a microcontroller centralized device that controls all the data sent sensors. Two famous microcontroller devices are Arduino and Raspberry Pi.
                <br></br><br></br>
                Arduino is a microcontroller device that constantly works on a loop to gather data from the sensors attached to it. Raspberry PI is a very powerful microcomputer that has its own Raspberry PI Operating System which even supports code editors like VS Code and can be used as a mini-computer.
              </div>
              <div className=''>
                    <img src={Img} className="center" width="100%" height="100%"></img>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Some applications of IoT are: In Smart Home System, to save electricity and alert user in case of Fire, Gas or Tap Leakage issues. In the Agriculture system, soil moisture sensors are used to detect whether crops are getting the proper source of nutrition.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base' >
              To Be Continued...
            </div>
          </div>

        </div>

        <Share_Blog />
      </div>




    </>
  )
}
