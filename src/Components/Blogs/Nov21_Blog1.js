import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Viveena Rathi.PNG'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/nov21_1.jpg'
import Share_Blog from './Share_Blog';
import Img from '../../imgs/In_Blog_Imgs/nov21_blog1.jpg'
import ScrollToTop from '../ScrollToTop';

export default function Nov21_Blog1() {
  return (
    <>
    <ScrollToTop />
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog1} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Stay Strong</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#trustyourself</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#groweveryday</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#learneveryday</span>
            <span className='bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2'>#booksforlife</span>
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
            We all have had a phase where we feel lonely and left out! This is one of the toughest parts of life, but eventually, we all get through it. We grow stronger. We grow out bigger than the problems we are facing. Some do this in days while some can take a few years. But this is required. Trust me.
            </div>
          </div>
          <div>
            <img src={Img} alt="Couldn't load this image..." className="center w-full h-full md:w-[75%] lg:w-[75%] lg:h-[50%]"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            How are you supposed to learn those life lessons? This phase might be hurting but it's just giving you the taste of what is already out there. I don't mean to scare you. The world is as good as you can think of but it can also be as bad. We all just need a positive attitude towards everything. This is required to know your actual potential, to know where you stand, to know what you are capable of doing; solely you. To know you, your skills and talents...Believe me!... This is God's way to tell you,“Spend time with yourself. This will not come any time soon. Some people don't realize this. Some may not even realize this! Some will just be sad for themselves for being lonely and some fall into the trap of depression. I can feel you! Been there and done that!
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            But here I am, writing this for you. I just realized this today, and it took me a few years. So my message for you guys is,
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base text-center inline-block text-[20px] ml-0 lg:mx-10' ><blockquote className='text-center'> Stop being sad just because you don't have something you don't need. Instead, start living, invest the time in yourself! If you want to achieve heights then you should start right away! I had no one to tell me this and I was a fool not to understand this by myself. You should not repeat this mistake of mine!</blockquote>

            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Well, think about this by spending a few minutes with yourself. I also want those people to reach out to other people and seek for guidance. Not to fall in some 2 day friendship which ends up hurting you even more. Read books! As they say, “Books are the bestest friends of humans.”
            </div>
          </div>

        </div>

        <Share_Blog />
      </div>




    </>
  )
}
