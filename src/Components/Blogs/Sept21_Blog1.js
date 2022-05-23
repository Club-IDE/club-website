import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Sakshi Shah.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/sept21_1.jpg'
import Share_Blog from './Share_Blog';
import Img from '../../imgs/In_Blog_Imgs/sept21_blog1.jpg'

export default function Sept21_Blog1() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Motivation comes from within</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#motivational</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#selfimprovement</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#mindfullness</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#positivevibes</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Sakshi Shah</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch-2k24 | 5 min read</h2>
            </span>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Many times people think that motivation comes from reading inspirational stories, watching real-life inspired movies, hearing motivational speakers, etc. This may help you for a short period of time; like you have heard or watched something motivational, you feel inspired and when you are exhausted, you stop. But what I believe is that motivation comes from within.
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap">
              <div className=''>
              No one can inspire you more than your own self. It may sound weird but I have experienced this myself. Let me give you an example, if there is anything in your career or study that you are really proud of, think about it whenever you feel demotivated or whenever you doubt the worth of your existence. It may not be specifically a past achievement in the required field. It may be anything that you are extremely satisfied with, for which you have worked hard. I am sure that there is something like this in everybody's life. If you have accomplished that task in the past, then surely with the required efforts you can complete your present aspirations. You were the same individual a few years ago and from there till this present moment you have grown, you have attained much more maturity and knowledge.
              </div>
              <div className='w-full lg:w-[80%] center my-5'>
                    <img src={Img} className="center"></img>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            With the required efforts, you are going to definitely succeed. Even if you fail, you will get a sense of satisfaction that you worked hard, you tried your best and you will keep trying. A sense of belief that at least you are capable of trying which many people are fail to do. This hard work will be the inspiration for your future goals. This cycle will keep on-going with your determination.
            </div>
          </div>

        </div>


        <Share_Blog />
      </div>




    </>
  )
}