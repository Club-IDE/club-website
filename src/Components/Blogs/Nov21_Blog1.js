import React from 'react'
import img from '../../imgs/Blog_Imgs/Author_Imgs/demo.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/nov21_1.jpg'

export default function Nov21_Blog1() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Stay Strong</h1>
          <div className='pt-5'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">#trustyourself</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">#groweveryday</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">#learneveryday</span>
            <span className='"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"'>#booksforlife</span>
          </div>
          <div className='flex mt-5'>
            <img class="w-10 h-10 rounded-full " src={img} alt="Rounded avatar" />
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
            <div className='text-base text-center inline-block w-max text-[20px] ml-0 lg:ml-20' ><blockquote className='text-center'> Stop being sad just because you don't have something you don't need. Instead, start living, invest the time in yourself! If you want to achieve heights then you should start right away! I had no one to tell me this and I was a fool not to understand this by myself. You should not repeat this mistake of mine!</blockquote>
           
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Well, think about this by spending a few minutes with yourself. I also want those people to reach out to other people and seek for guidance. Not to fall in some 2 day friendship which ends up hurting you even more. Read books! As they say, “Books are the bestest friends of humans.”
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
