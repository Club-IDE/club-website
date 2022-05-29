import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Ayush Solanki.jpg'

import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/jan22_2.jpg'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/jan22_blog2_1.webp'
import Img2 from '../../imgs/In_Blog_Imgs/jan22_blog2_3.jpg'
import ScrollToTop from '../ScrollToTop';

export default function Jan22_Blog2() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>The Meta-Verse</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#metaverse</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#blockchain</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#ArtificialIntelligence</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#technology</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Ayush Solanki</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~IT Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            Metaverse is a virtual-reality space in which users can interact with a computer-generated environment and other users. A metaverse is a network of 3D virtual worlds focused on social connection. 3D spaces in the metaverse will let you socialize, learn, collaborate and play in ways that go beyond what we can imagine. Technologies that make up the metaverse combine aspects of the digital and physical worlds. Metaverse is the term used to define a huge persistent 3D world where people can interact with digital objects and virtual worlds.
            </div>
          </div>

          <div className='pt-5 py-2'>
            <h1 className='text-3xl font-bold'>Technologies Behind Metaverse:</h1>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Virtual Reality (VR)</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Virtual Reality is a computer-generated simulation of an alternate world or reality. It is used in 3D movies and video games. It helps to create simulations similar to the real world and immerse the viewer using computers and sensory devices like headsets and gloves.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Apart from games and entertainment, virtual reality is also used for training, education, and science. This is an experience that simulates realistic situations. By providing virtual reality (VR)-based wearables that transport people to an alternate virtual world from the comfort of their own homes, the Metaverse can potentially disrupt various industries further using this technology.
            </div>
          </div>
          <div>
            <img src={Img1} alt="Couldn't load this image..." className="center w-full h-full md:w-[75%] lg:w-[75%] "></img>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Augmented Reality (AR)</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Augmented Reality is a perfect blend of the digital world and the physical elements to create an artificial environment. Apps built using AR blend digital components into the real world.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            This is an experience where designers enhance parts of a user's physical world with computer-generated input. Eventually, AR contact lenses and AR glasses could be used to augment the world around us and facilitate virtual assistants with the help of sophisticated artificial intelligence. This technology would help us navigate both the real and virtual worlds in the metaverse.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Artificial Intelligence (AI)</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Unreal Engines made a human creator play a major part in creating human look-alike characters. And if and when these characters can exhibit general artificial intelligence, the results can be amazing and surreal. AI technology can help us streamline the creation of Metaverse assets, such as characters, landscapes, buildings, character routines, and more; we may see a future where advanced AI capabilities are integrated with game engines such as Unreal Engine. Accurate avatar creation, Digital humans, Multilingual accessibility, etc are the applications of AI in metaverse..
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h2 className='text-2xl font-bold'>Blockchain</h2>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Blockchain technology in a decentralized Metaverse would be an ideal currency for facilitating quick and secure digital transactions. Blockchain is a shared database that allows multiple parties to access data and verify that data in real-time. Blockchain technology offers a decentralized and transparent solution for digital evidence of ownership, digital collectability, value transfer, governance, accessibility, and interoperability. Cryptocurrencies allow people to transfer value in the 3D digital environment while working and socializing.
            </div>
          </div>
          <div>
            <img src={Img2} alt="Couldn't load this image..." className="center w-full md:w-[70%] lg:w-[70%]"></img>
          </div>

        </div>

        <Share_Blog />
       </div>




    </>
  )
}
