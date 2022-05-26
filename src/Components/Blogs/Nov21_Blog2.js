import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Bhakti Trivedi.jpg'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/nov21_2.jpg'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/nov21_blog2_1.png'
import Img2 from '../../imgs/In_Blog_Imgs/nov21_blog2_2.png'
import Img3 from '../../imgs/In_Blog_Imgs/nov21_blog2_3.png'
import Img4 from '../../imgs/In_Blog_Imgs/nov21_blog2_4.png'
import ScrollToTop from '../ScrollToTop';

export default function Nov21_Blog2() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>History of Web</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#worldwideweb</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#internet</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#historyofweb</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#technology</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Bhakti Trivedi</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch-2k23 | 5 min read</h2>
            </span>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            We are constantly connected to devices. These devices communicate with each other to make our lives easier. We've become so immersed in technology that we don't even notice that a simple smartwatch app is replacing heavier equipment to keep our health vitals in check. Web 3.0 is the next step in the web's growth, and it aims to make the internet more intelligent.Over the last few years, the World Wide Web has developed, bringing with it new tools and strategies. Web 1.0, 2.0, and 3.0 are typical names for these stages. Now let's understand each of these.
            </div>
          </div>
          <div>
            <img src={Img1} alt="Couldn't load this image..." width="75%" height="75%" className="center"></img>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>Web 1.0</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            It is the first stage in the evolution of the web, which is also referred to as the read-only web. Web 1.0 websites were not as dynamic and interactive as it is now. The primary goal of the websites was to make the information available to the general public. As servers were improved, average connection speeds rose, and developers gained new skills and techniques, the shift from Web 1.0 to 2.0 occurred over time.
            </div>
          </div>
          <div className='pt-5 py-2'>
            <h1 className='text-2xl font-bold'>Web 2.0</h1>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className='text-img'>
              It is the second stage in the evolution of the web, which is also referred to as the read-write web. It's just a better version of the first world wide web, marked by the shift from static to dynamic or user-generated content, as well as the rise of social media.
              <br></br><br></br>
              Some of the famous Web 2.0 applications are Google Maps, Facebook, Twitter, YouTube, WordPress, etc. Web technologies such as HTML5, CSS3, and Javascript frameworks such as ReactJs, AngularJs, VueJs, and others enable users to come up with new concepts, allowing users to contribute more to this Social Web.
              </div>
              <div className="">
                  <img src={Img2} alt="Couldn't load this image..." className='center my-5'></img>
              </div>
            </div>
          </div>
          <div className='pt-5 py-2'>
          <h1 className='text-2xl font-bold'>Web 3.0</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            It is the third stage in the evolution of the web, which is also referred to as the read-write-execute which refers to the future of the web. In this era, Artificial Intelligence and Machine Learning enable computers to understand data in the same way that people do.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Web3 applications or DApps, are developed on decentralized peer-to-peer networks like Ethereum and IPFS. These networks are developed, operated, and maintained by their users, rather than by a business. They self-organize and don't have a single point of failure.
            </div>
          </div>
          <div>
            <img src={Img3} alt="Couldn't load this image..." className="center my-5"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            You'll notice that when you hear about Web3, cryptocurrencies are frequently mentioned. This is due to the fact that many of these protocols include cryptocurrencies. Anyone who wishes to help create, control, or improve one of the projects is given a cash incentive (tokens).
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            These protocols frequently provide a wide range of services, including computation, storage, bandwidth, identification, hosting, and other online services previously supplied by cloud providers.
            </div>
          </div>
          <div className='pt-5 py-2'>
          <h1 className='text-2xl font-bold'>What makes Web 3.0 so unique?</h1>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Web 3's major benefit is that it seeks to solve the most serious issue that has arisen as a result of Web 2: the gathering of personal data by private networks, which is subsequently sold to marketers or potentially stolen by hackers.
            </div>
          </div>
          <div>
            <img src={Img4} alt="Couldn't load this image..." className="center w-full h-full my-5 lg:w-[50%] lg:h-[50%]"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Web 3's network is decentralized, meaning it is not controlled by a single organization, and the decentralized applications (apps) created on top of it are open.
            </div>
          </div>

        </div>

        <Share_Blog />
      </div>




    </>
  )
}