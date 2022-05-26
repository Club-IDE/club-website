import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/sandesh_logo.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/dec21_2.jpg'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/dec21_blog2_1.jpg'
import Img2 from '../../imgs/In_Blog_Imgs/dec21_blog2_2.png'
import Img3 from '../../imgs/In_Blog_Imgs/dec21_blog2_3.png'
import ScrollToTop from '../ScrollToTop';

export default function Dec21_Blog2() {
  return (
    <>
    <ScrollToTop />
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Feature of Future</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#WhatsApp</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#newfeatures</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#techupdates</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#technology</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Sandesh News</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~Article from Sandesh News | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            In WhatsApp, users could send a voice message to another user, but they did not get a chance to listen to that voice message before sending it. However, this often led to the user sending the wrong voice message. With this in mind, WhatsApp has changed its feature and given a new feature to give you a chance to listen to it before sending a voice message. This feature will give the user a chance to check if it is appropriate to send them a recorded voice message. Not only that, after hearing it, if it is not suitable, you will get a chance to discard it and record it again.
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
              This feature announced by WhatsApp will work in both individual and group chat. As well as this feature will be available in both Android and iOS platforms.
              <br></br><br></br>
              The feature was first seen in May. According to WABetaInfo, a beta version of WhatsApp, the feature initially features a review and cancel buttons. However, this feature has been and continues to be redesigned by the design of WhatsApp in view of the feedback received from users of the beta version. After which it was included in the update so that all users could use it.
              </div>
              <div className="my-5 lg:my-0 w-[100%] lg:w-[50%]">
                <img src={Img1} alt="Couldn't load this image..." width="100%" height="100%"></img>
              </div>
            </div>
          </div>
          <div className='pt-5 py-2'>
          <h1 className='text-2xl font-bold'>How will the voice message preview feature work?</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            To use the voice message preview feature in WhatsApp on mobile, you have to hold down the microphone icon on the right side in WhatsApp chat. If you want to record in the hands-free mode, sliding the microphone's logo upwards will lock it. After which recording can be done. An interface will appear to the user during recording. In which you will find two options like stop and trash. The user will be able to stop recording by pressing the stop button. After which the play button will be displayed so that the user can hear it before sending it.
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className="my-5 lg:my-0 pr-0 lg:pr-5">
                <img src={Img2} alt="Couldn't load this image..." width="100%" height="100%"></img>
              </div>
              <div className='text-img'>
              Recorded voice message can be heard. If it is not correct, the voice message can be discarded using the trash button below it. Recording a voice message without sliding and locking the microphone button will not be heard again. If the user suspects an error in the recorded voice message, the user can discard the message by sliding it to the left.
              </div>
            </div>
          </div>
          <div className='pt-5 py-2'>
          <h1 className='text-2xl font-bold'>📢8 WhatsApp features that were launched in 2020:</h1>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
            <div className='text-img'>
                <div ul>
                  <li>WhatsApp flash call</li>
                  <li>Missed group calls Disappearing mode</li>
                  <li>WhatsApp Payment</li>
                  <li>WhatsApp Advanced Search</li>
                  <li>WhatsApp Dark Mode</li>
                  <li>The limit for group voice or video calls has been increased</li>
                  <li>Storage management tool</li>
                  <li>Sticker making feature</li>
                </div>
              </div>
              <div className="my-5 lg:my-0">
                <img src={Img3} alt="Couldn't load this image..." width="100%" height="100%"></img>
              </div>
            </div>
          </div>

        </div>


      <Share_Blog />

</div>
    </>
  )
}
