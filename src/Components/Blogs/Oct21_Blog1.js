import React from 'react'
import img from '../../imgs/Blog_Imgs/Author_Imgs/demo.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/oct21_1.1.jpg'

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
          <div className='pt-5'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">#beautifulyou</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">#fearless</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">#optimistic</span>
            <span className='"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"'>#selflove</span>
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
            “You are the most beautiful person alive and can do anything that you want. Keep growing...”
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            It is so daring to see those cruel faces every day and yell at them inside our minds and control our feelings. It is so tough, isn't it?
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            It is a task of bravery. And if no one has told these things to you lately, then wake up. I have told you these things today and you need to tell these to yourself every day from today onwards.
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
