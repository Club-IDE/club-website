import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Parth Parmar.jpg'

import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/mar22_1.jpg'
import Img from '../../imgs/In_Blog_Imgs/mar22_blog1.jpg'
import Share_Blog from './Share_Blog';
import ScrollToTop from '../ScrollToTop';

export default function Mar22_Blog1() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Value Addition</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#values</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#motivation</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#inspiration</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#impactful</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Parth Parmar</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | @thatp2blog | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            <blockquote>Be assertive, be attentive and be creative.<br></br>The world needs people who can add value.</blockquote>
            </div>
          </div>
          <div>
            <img src={Img} className="center" width="60%" height="50%"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Sometime ago, I shared a quote on Twitter that says, "People will not consider you or listen to you until you add value to their life whether it could be your social media audience, your teammate, etc."
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            From my perspective, this quote has a deep meaning so let us try to understand it in the next few paragraphs.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Now you imagine a situation where I am a creator (expect the entertainment industry) and you are my audience, so think about the question "Why would you watch me?"
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            The answer to that from your side will probably be, "You may be teaching us something or telling us something that will be helpful for us. "Here your answer indicates that you will watch my content if I am giving you something that can help you to improve. It could be your lifestyle, studies, concentration power, health, etc. That's what I call adding values.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            The above example is based on social media but trust me it is applicable everywhere in the world. If you are adding value to another person's life they will consider you, and your decisions, and will also in return add value to your life. So, try to add value to more and more people's lives.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            This was all we talked about values and their importance. Now many of you might have a question that what could I do to add value to people's lives, may I also start posting on social media? or How can I add value to other people's lives?
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Look adding values does not only mean motivating them through social media or other ways. Everyone has their own definition of that. For some people teaching others or helping others with their problems could be adding value. For some people, it could be sharing information with others or help others with managing their finances.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Now you have to decide the definition of adding value from your end, which means what you can do to add value to another person's life. That can be teaching and helping in the field you are better at. Here are no such boundaries for doing so. It is only up to you how you define and how you think.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            So that was the deep meaning of this tweet. Hope you found it useful and I have added value to your life. If you liked my blog so subscribe to the blog so that you can get a notification as I post a new blog. You can also check my Twitter where I share my thoughts all links are down there.
            </div>
          </div>
        </div>

        <Share_Blog />
       </div>




    </>
  )
}
