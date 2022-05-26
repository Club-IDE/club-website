import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Parth Parmar.PNG'

import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/feb22_1.jpg'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/feb22_blog1.webp'

export default function Feb22_Blog1() {
  return (
    <>
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog1} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Routine</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#routine</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#dailylife</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#motivation</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#goals</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Parth Parmar</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5 text-justify'>
            <div className='text-base'>
            <blockquote>If you think adventure is dangerous, try routine, it is lethal.</blockquote>
            </div>
          </div>

          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>What are routine?</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Routine is a practice that can where you schedule your whole day and spend your time according to it whether it be doing something productive or just watching some web series in between.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            <blockquote>The secret of your future is hidden in your daily routine.</blockquote>
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>Why do you need routine?</h1>
          </div>
          <div className='pt-5 text-justify'>
            <div className='text-base'>
            Routine is very important to keep account of your time. For going on a short date or a short trip if we plan very wisely then it is about our whole day and our important tasks so you have to plan it.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>Everything about routine</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base text-justify'>
            As routines are meant to be followed every day without any change, it should not be hectic or boring because if you cannot find your routine interesting then you'll end up not following it after some days. To make the routine interesting first thing you need to have in mind is it should be realistic. It shouldn't have some ideal or unreal goals. Every person has their own personality and according to that, all should have unique routine also where you should not copy your routine watching anyone else's but yes you can get inspired from them and arrange yours according to your body needs.
            </div>
          </div>

          <div className='pt-5'>
            <div className='text-base text-justify'>
            But here by inspiration i meant you should analyse routines of some successful person and see take the best out of it. Take out some specific points and try to include them in your schedule.
            </div>
          </div>

          <div className='pt-5'>
            <div className='text-base text-justify'>
            As we have seen about routine and needs of routine now let us see some tips to successfully implement our routine.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>Brakes are important</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base text-justify'>
            We cannot constantly do one thing without distracting once and after doing it for some time we will feel boredom to overcome this we should include breaks in our schedule where you will pass your time doing your favourite activities. Brakes are important wether it is in a day in a week or in a year.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base text-justify'>
            In daily routine Pomodoro technic is the best way to implement brakes. In this technic, the concept is to work for some hours and taking brake for few minutes. In an hour it can be implemented as working for 55 minutes continuously and then taking a break for rest of 5 minutes where you just stretch out your bodies and walk around to the balcony.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base text-justify'>
            In a weekly routine as best practice you should take a day off or a day when you do some entertaining activities either it be playing, watching movie or netflix etc.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>You can never be the same</h1>
          </div>

          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img text-justify'>
                You create schedule to follow it around a day but. you should plan it in a way that it is not same all over the day because one thing you need to keep in mind that you can never be the same. You have different hours where your productivity is very high and some hours are there in some hours you will do massive work and on the other side you'll end up doing few tasks in the same time on non-peak hours. Here comes the prioritising your tasks in a day. If you do not prioritise your tasks you will end up doing less meaningful tasks in the peak hours and wont have energy for the important tasks.
              </div>
              <div className="center w-full lg:w-[50%]">
                <img src={Img1} alt="Couldn't load this image..."></img>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              As per 80-20 rule you complete your 80% important work in less than 20% of total time. So you should create your timetable in a way that you do not waste your energy in 20% of less meaningful work.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              Ancient Indian Ayurveda also tells that according to your personality and combination of 'rasa' in your body you will have different behaviour towards day, different habits and need for sleep. Accordingly, you should create the same on your nature. In ayurveda it is defined that early morning or late night is the best time to work where your energies are high. Morning time is best for grasping knowledge and studying.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Here taking a glance at my routine some of you will feel that I should also follow parth and decrease my sleep hours and I will become more productive but there is a catch that every person has their different body needs, different peak hours and also different habits. So you should not copy anyone else,s schedule and create your own according to your body needs. How much time you give or how many hours you work is not an important thing but how productive you are during that time is a very important thing. If you rigidly follow a routine of someone other then you'll end up forcing your body to follow the same and will stop following after some days. so it is better to create one for your own. One main thing you need to focus on is that being busy and successful are not the same boat.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            If you have created your routine table and you are unable to implement it successfully then one thing you can do is maintain a task checklist and journal and after EOD you just evaluate yourself and give yourself a rating according to it only. You try to that graph of a rating does not have a negative slope.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            At last I just want to add that routine is a very important thing to be planned out and everyone should have one and stick to it. You should not copy it from anyone else's and create your own based on your work and needs. Push yourself to make your schedule your habit and follow it with taking brakes, think weeks and work with enjoyment.
            </div>
          </div>

        </div>

        <Share_Blog />
       </div>




    </>
  )
}
