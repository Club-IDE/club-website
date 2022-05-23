import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Viveena Rathi.PNG'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/jan22_1.jpg'

export default function Jan22_Blog1() {
  return (
    <>
      <div className='container pt-28 w-max m-auto '>
        <div className="py-5 ">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog1} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Still Learning Always Learning</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#learning</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#neverstop</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#knowledge</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#knowing</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Viveena Rathi</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            Knowledge means the theoretical or practical understanding of a subject. There is a big difference between knowledge and knowing. To know is like you know the sun rises in the east but to have the knowledge means to know that the sun rises in the east because the earth rotates from west to east.
            </div>
          </div>

          <div className='pt-5 py-2'>
          <h1 className='text-2xl font-bold'>Understand the difference?</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            It's not necessary to have such scientific knowledge. But it is necessary to have some knowledge. You can never learn and know about all the things worldwide in just a single life. So when someone tries to teach you something new or tries to tell you something about which you have never heard before then pay attention to it. Show some interest in it. You never know when that might be useful to you. Life is unpredictable. You may be a billionaire tomorrow or you may be a fast-food worker. Anyways, all that is under God.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            We just need to play our roles perfectly. Never say no to know something new. You should have that hunger inside you. Your hunger should never diminish. You have to have that bookworm somewhere inside. You have to have that interest to learn from anything and everything.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Sometimes you also have that knowledge but there's is no harm if you act foolishly. When someone teaches you something they do it from their heart. And we all know how it feels when a heart is broken (almost all of us know). So better listen to them instead of acting over-smart.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base text-center inline-block text-[20px] ml-0 lg:mx-10'><blockquote>Stay hungry, stay foolish.</blockquote>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base text-left'>
            -Steve Jobs
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Show your moves on the stage, not backstage.
            </div>
          </div>

        </div>


    <div className="flex justify-center w-[100%] m-auto relative top-0 lg:top-[-200px]">

            <a href='/' className="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto border-2">
            <FaLinkedinIn color='black'  className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
                <span className="text-xs font-bold lg:text-xl md:text-lg">
                    Share on Linkdin
                </span>
            </a>
            <a href='/' className="flex items-center justify-center px-5 py-1 text-black transition-colors duration-200 transform bg-white focus:outline-none sm:w-auto  border-2 ">
            <FaTwitter color='black'  className='team-card_icon_linkedin lg:text-3xl text-xl mr-5' />
                <span className="text-xs font-bold lg:text-xl md:text-lg">
                    Share on Twitter
                </span>
            </a>
    </div>
      </div>

      <div>
        <hr className='border-2 bg-primary border-primary mb-20 mt-36 lg:mt-0' />
        <img src={eye} alt="" className='w-20 m-auto relative top-[-115px]'/>
      </div>




    </>
  )
}
