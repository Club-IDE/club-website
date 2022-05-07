import React from 'react'
import img from '../../imgs/Blog_Imgs/Author_Imgs/demo.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/Blog2.png'

export default function Sept21_Blog2() {
  return (
    <>
      <div className='container pt-28 w-max m-auto '>
        <div className="py-5 ">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Internet Of Things</h1>
          <div className='pt-5'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">#Git</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">#GitHub</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">#Javascrpit</span>
            <span className='"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"'>#WebDev</span>
          </div>
          <div className='flex mt-5'>
            <img class="w-10 h-10 rounded-full " src={img} alt="Rounded avatar" />
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
            <div className='text-base'>
            Sensors can sense the human presence, atmospheric pressure, soil state, human body status etc. Sensors are connected with a microcontroller centralized device that controls all the data sent sensors. Two famous microcontroller devices are Arduino and Raspberry Pi.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Arduino is a microcontroller device that constantly works on a loop to gather data from the sensors attached to it. Raspberry PI is a very powerful microcomputer that has its own Raspberry PI Operating System which even supports code editors like VS Code and can be used as a mini-computer.
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


    <div class="flex justify-center w-[100%] m-auto relative top-0 lg:top-[-200px]">

            <a href='/' class="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto border-2">
            <FaLinkedinIn color='black'  className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
                <span class="text-xs font-bold lg:text-xl md:text-lg">
                    Share on Linkdin
                </span>
            </a>
            <a href='/' class="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto  border-2 ">
            <FaTwitter color='black'  className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
                <span class="text-xs font-bold lg:text-xl md:text-lg">
                    Share on Twitter
                </span>
            </a>
    </div>
      </div>

      <div>
        <hr className='border-2 border-primary mb-20 mt-36 lg:mt-0' />
        <img src={eye} alt="" className='w-20 m-auto relative top-[-115px]'/>
      </div>




    </>
  )
}
