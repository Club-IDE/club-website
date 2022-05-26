import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Mitesh Makvana.png'

import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/apr22_1.jpg'
import Img1 from '../../imgs/In_Blog_Imgs/apr22_blog1_2.jpg'
import Share_Blog from './Share_Blog';
import Img2 from '../../imgs/In_Blog_Imgs/apr22_blog1_1.jpg'
import ScrollToTop from '../ScrollToTop';

export default function Apr22_Blog1() {
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
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-[30px] pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Quality of Work and Time</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#TimeManagement</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#PersonalDevelopment</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#productivity</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#success</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Mitesh Makvana</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            <blockquote>Your future is created by what you do today, not tomorrow.</blockquote>
            </div>
          </div>
          <div>
            <img src={Img1} className="center my-3"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Most of us might be facing problems related to time and pending work. Also, we know how much important is time management skill. To do something, it is not important to take much amount of time but important is that quality time and task. In my perspective, you just have to take the right decision at right time. You have to do today's task. Thus, don't need to worry about tomorrow. If you will make the right decision but the time is wrong then your decision will become wrong, too. This type of choice can demotivate you and you will be going away from your path to go up.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Let make me clear about this quality of work and time. All of you know Virat Kohli, he is known for his fitness as well. To maintain his fitness, he is only managing time and quality of exercise. He exercises only 5 days for 3-4 hours a week and is a man among most fit athletes. We have to do the same as him. Make your timetable on your own and follow it. You don't need to do a task or job the whole day, but find your interesting time withinparticular work. For example, if you enjoy reading a night then why are you waking up early? It won't be productive. Don't follow others' timetables for your work because it's his/her choice.
              <div className='pt-5'>
                <div className="imagebox flex flex-wrap md:flex-nowrap lg:flex-nowrap">
                  <div className='text-img '>
                    There are 2H (How and How much), which are very important. First of all, enlist your work/tasks on daily basis. Now observe those tasks for 10 minutes and ask yourself how can you do? How much time do you need? and enlist your thoughts. Now select one proper and suitable method to finish your task from this list. If you make the right decision then half of the work is done here. You must take the minimum amount of time to reach your goals. It means not to do multiple tasks at a time but do tasks in a part. You should make parts in a moderate way such that they shouldn't remain too short as well as too large. Once your part is allocated to any certain task then complete it first and after it does any other work. After completion of these works, prepare a note of those to get an idea about your pending/completed works. After done with one part there must be a short relaxing time and then restart this round constantly until your goal is accomplished.
                  </div>
                  <div>
                    <img src={Img2} className="center"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            This is my small perspective on daily work and the time to do it. So just try and try to become regular because it never be happened in just one day but it will be in one day, sure. You just have to take care of your routine only for 4-5 hours per day. As suggested in the first line, you have to stay with you only for today and you will be with you tomorrow automatically.
            </div>
          </div>

        </div>

        <Share_Blog />
       </div>




    </>
  )
}
