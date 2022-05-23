import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Viveena Rathi.PNG'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/oct21_1.jpg'
import Share_Blog from './Share_Blog';
import Img from '../../imgs/In_Blog_Imgs/oct21_blog1.webp'

export default function Oct21_Blog1() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Wake Up Note</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#beautifulyou</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#fearless</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#optimistic</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#selflove</span>
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
            We wake up to this evil world every morning and so we may appreciate ourselves and other people too. It takes lots of guts to survive in this world, I must say. Things are not as simple as they seem to be.
            </div>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            To all those people who are living healthily, you all are amazing. If no one told you today how beautiful you are or how great job you are doing, let me just do that honour.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              <blockquote>You are the most beautiful person alive and can do anything that you want. Keep growing...</blockquote>
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
                It is so daring to see those cruel faces every day and yell at them inside our minds and control our feelings. It is so tough, isn't it?
                <br></br><br></br>
                It is a task of bravery. And if no one has told these things to you lately, then wake up. I have told you these things today and you need to tell these to yourself every day from today onwards.
              </div>
              <div className='mt-5 lg:mt-0'>
                    <img src={Img} className="center" width="100%" height="100%"></img>
              </div>
            </div>
          </div>

        </div>

      <Share_Blog />
      </div>




    </>
  )
}
