import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Viveena Rathi.PNG'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog1 from '../../imgs/Blog_Imgs/Post_Imgs/dec21_1.jpg'
import Share_Blog from './Share_Blog';
import Img from '../../imgs/In_Blog_Imgs/dec21_blog1.jpg'
import ScrollToTop from '../ScrollToTop';

export default function Dec21_Blog1() {
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
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>A Common Man</h1>
          <div className='pt-5 flex flex-wrap'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 my-2">#commonman</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 my-2">#lifestyle</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 my-2">#struggle</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 my-2">#hardwork</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Viveena Rathi</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch 2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            Is life sumptuous for a common man? NEVER. A common man can never gain whatever he needs. I’m talking about the Indian system. As most of my viewers belong to US and UK they might not be aware of this. Well, in India, a hard-working man has no worth while the smart working men are halfway up and halfway down.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              What happens is that the men who try to be loyal to their work, to the society and to the family are not preferred over jobs while the ones who are involved in the black things (if you know what I mean) which include corruption, hoarding, trafficking, smuggling, etc. are often preferred for any kind of jobs.
            </div>
          </div>
          <div className='pt-5'>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
              <div className="">
                <img src={Img} alt="Couldn't load this image..." width="100%" height="100%"></img>
              </div>
              <div className='text-img'>
                A common man is just the kind of person I described first. Hence, they are always left back in both development and growth. Still, they can manage their lives by doing some or the other work.
                <br></br><br></br>
                But when it comes to family, it's really difficult to work in this world and earn to feed your family.
                <br></br><br></br>
                Difficulty makes them earn anyhow.
                <br></br><br></br>
                Many manage to do this but others don't. Not only they suffer but with them, their family suffers. And if he is the only earning hand in the family then trust me that family is not able to satisfy their needs properly. This leads everyone to a halfway up, halfway down situation. They will have to try and try and try and they can't even give up because it's the only option for them. Sometimes even they get confused because they don't understand the difference between what they do and what should be done. Something goes wrong with their brains. Sometimes they get stressed too.
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            The family's condition is even more miserable. They don't get any rights over money. Whatever they are asked to do is to be done by them. Disappointment arrives in. After all, they are just what you are. Yes, humans. So they would definitely feel like the way you do. They get aggressive because there is no one to listen to them and because they don't speak up the, all the small things clot up together to create poison enough to kill oneself. They may be alive for the world, but inside their heart has already given up.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            What you give is what you receive.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            In the end, it leaves you in a halfway up - halfway down situation.
            </div>
          </div>

        </div>

        <Share_Blog />

        </div>




    </>
  )
}
