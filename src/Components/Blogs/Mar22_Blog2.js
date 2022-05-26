import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Jinal Raval.png'

import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/mar22_2.jpg'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/mar22_blog2_1.webp';
import Img2 from '../../imgs/In_Blog_Imgs/mar22_blog2_2.webp';

export default function Mar22_Blog2() {
  return (
    <>
      <div className='container pt-28 w-max m-auto '>
        <div className="pt-16 lg:pt-8">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Bol Behen Chatbot</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#WhatsAppChatbot</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#ArtificialIntelligence</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#wellbeing</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#technology</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Jinal Raval</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            The chatbot runs on AI and will help educate women about general and sexual well-being. According to News18, the chatbot will be available in both Hindi and English. "Bol Behen" will cover an array of topics, ranging from relationships, and sexuality, to reproductive health. When translated to English, Bol Behen means "Yes, sister?" or "Ask, sister."
            </div>
          </div>
          <div>
            <img src={Img1} alt="Couldn't load the image..." className=" w-full f-full center lg:w-[70%] lg:h-[70%]"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Meta-owned messaging platform WhatsApp on 30 March launched an AI chatbot in India, in a bid to help adolescent girls and young women with concerns and queries around general health and sexual well-being. The AI chatbot named "Bol Behen" has been launched in collaboration with a non-profit named Girl Effect, and the "Hinglish" language chatbot provides adolescent girls with a safe space to grow their knowledge.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Bol Behen AI chatbot has been equipped with relatable and easy-to-understand content on sensitive topics such as sex, relationships, and reproductive health, which will be available on WhatsApp, the world's most popular messaging platform that has more than 487 million users in India alone, according to Statista. Built on the WhatsApp Business Platform, the chatbot is available 24/7 in Hinglish. To access the bot, WhatsApp users need to send "Hi" to the number +917304496601 on WhatsApp or click on this link <a href='https://api.whatsapp.com/send/?phone=917304496601&text&app_absent=0'><span className='text-primary'> https://wa.me/917304496601 </span></a>.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>"A digital big sister"</h1>
          </div>
          <div className='pt-5'>
            <div className="imagebox flex flex-wrap lg:flex-nowrap md:flex-nowrap">
              <div className='text-img'>
                Bol Behen was first launched in 2020 on Facebook Messenger in India. That chatbot has reached 100,000 conversations with 1.6 million messages, News18 reported. Girl Effect also runs a similar bot in South Africa. So far, all of Girl Effect's bots have clocked in 148,000 conversations in total with over 2.8 million messages sent to the bot by girls.
              </div>
              <div className="lg:w-[70%] my-3">
                <img src={Img2} alt="Couldn't load the image..."></img>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            According to Girl Effect's website, the bot is called Big Sis and its persona is created along the lines of a "digital big sister." Big Sis is reportedly able to recognise questions with over 87% accuracy.Bol Behen chatbot is inspired by Girl Effect's first chatbot named Big Sis that provides girls in South Africa with non-judgmental advice on sensitive issues, including sex and relationships, on platforms and channels they know, trust and love.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>High Band 5G (MmWave):</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Characterized by extremely low latency and approximately 10 times faster than 4G LTE networks, millimeter wave (mmWave) 5G enables messages to transmit almost immediately, but it requires close proximity to a tower.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>5G vs 4G</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            5G may have the capacity to handle up to a million devices per square kilometre3. You will have less concern with dropped connections or how many devices you have connected to the network, it's that much more reliable.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            4G will offer essential support to the 5G networks and act as a bridge between the major cities. 4G will also continue to provide coverage in the less populated areas of Australia. As Telstra and Optus have already demonstrated with their first phase plans for their 5g rollout, that 4G and 5G networks will work together.
            </div>
          </div>
        </div>

        <Share_Blog />
       </div>




    </>
  )
}
