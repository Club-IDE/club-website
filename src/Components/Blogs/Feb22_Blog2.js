import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Jinal Raval.png'

import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/feb22_2.png'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/feb22_blog2_1.webp'
import Img2 from '../../imgs/In_Blog_Imgs/feb22_blog2_2.png'
import ScrollToTop from '../ScrollToTop';
import Img3 from '../../imgs/In_Blog_Imgs/feb22_blog2_3.jpeg'


export default function Feb22_Blog2() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>5G Technology</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#5g</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#network</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#internet</span>
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
            5G is the fifth-generation wireless connectivity that would make digitalization more accessible for businesses, public services, and individual households to reap the benefits of IoT, industry 4.0, and the explosion of intelligent devices. The next generation of wireless connectivity, or 5G, acts as a catalyst that promotes the advancement of intelligent connectivity. With speeds up to 100x faster than 4G LTE, 5G networks offer unlimited mobile broadband, low latency, ultra-high reliability, and massive machine-to-machine communications.
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
                5G and other cellular mobile networks such as 4G LTE use radio waves or radio frequency (RF) electromagnetic fields (EMF) to communicate with the base stations. However, 5G utilizes a higher EMF spectrum with higher frequencies. Moreover, 5G uses a new digital technology that enables devices to connect with multiple base stations and antennas simultaneously with multiple targeted beams to provide 5G users with enhanced speed and bandwidth within a wide coverage area. This technology is called Massive MIMO, which stands for Multiple-Input Multiple-Output.
              </div>
              <div className="image">
                <img src={Img1} alt="Couldn't load this image..." ></img>
              </div>
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-3xl font-bold'>3 Types Of 5G Networks:</h1>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Low Band 5G</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Low band spectrum 5G is best understood as a blanket layer for nationwide coverage. It will be a baseline level of 5G. One low band 5G tower — transmitting on the same frequency that was once used for TV broadcasts
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Low Band 5G</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Low band spectrum 5G is best understood as a blanket layer for nationwide coverage. It will be a baseline level of 5G. One low band 5G tower — transmitting on the same frequency that was once used for TV broadcasts
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Mid-Band 5G</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            About six times faster than 4G LTE, mid-band 5G is likely to be more available in major metropolitan areas of the United States. Mid band 5G offers service within smaller areas compared to low band 5G, and because carriers can allocate more resources in mid band, data speeds are higher than for low band 5G.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>High Band 5G (MmWave)</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Characterized by extremely low latency and approximately 10 times faster than 4G LTE networks, millimeter wave (mmWave) 5G enables messages to transmit almost immediately, but it requires close proximity to a tower.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>5G Vs 4G</h2>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
                5G may have the capacity to handle up to a million devices per square kilometre3. You will have less concern with dropped connections or how many devices you have connected to the network, it's that much more reliable.
              </div>
              <div className='w-full lg:w-[50%] my-4'>
                <img src={Img2} alt="Couldn't load this image..." className='w-full h-full md:w-[70%] lg:w-[80%]'></img>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              4G will offer essential support to the 5G networks and act as a bridge between the major cities. 4G will also continue to provide coverage in the less populated areas of Australia. As Telstra and Optus have already demonstrated with their first phase plans for their 5g rollout, that 4G and 5G networks will work together.
            </div>
          </div>
          <div>
            <img src={Img3} alt="Couldn't load this image..." width="70%" height="70%" className="center"></img>
          </div>
        </div>

        <Share_Blog />
       </div>




    </>
  )
}
