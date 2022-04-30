import React, {useState} from "react";
import demo from '../demo.jpg';
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import '../index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'



function MemberCard(props) {

    return (
        <>
         {/* <div className="lg:w-[19%] md:w-[34%] lg:mb-7 mb-6 p-4 bg--[#ffffff] mt-4 bg-[#F3F8FF] mx-auto border-b-8-hidden hover:border-[#2f2e2e] w-[55%]  member-card hover:drop-shadow-xl border-2">
                 <div className="h-full">
                     <img alt="" className="lg:w-20 w-20 h-20 lg:h-20 mb-4 object-cover object-center rounded-full inline-block border-4  mt-3 p-1 member-photo" src={demo} />
                     <h1 className="text-black lg:text-2xl text-2xl font-bold">{props.name}</h1>
                     <h2 className="text-[#00000] my-2 font-semibold">{props.role}</h2>
                     <p className="text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente sit maiores laudantium nisi accusantium similique quam quas facere sint?</p>
                     <div className='flex justify-center mt-5'>
                         <FaTwitter color='black'   className='team-card_icon_twitter transition-all lg:text-3xl text-2xl'  />
                          <FaLinkedinIn color='black'  className='lg:mx-6 mx-7 team-card_icon_linkedin lg:text-3xl text-2xl' />
                          <FaGithub color='black'  className='team-card_icon_github lg:text-3xl text-2xl'/>
                      </div>
                  </div>
              </div> */}

        <div className="max-w-md  overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl scale-[0.8] hover:border-[#2f2e2e]  member-card hover:drop-shadow-xl sm:scale-1 mb-0 hover:scale-[0.9]">
            <img className="object-cover object-center w-full h-56" src={demo} alt="avatar" />


            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 ">{props.name}</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

                <div className="flex items-center mt-4 text-gray-700">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http: www.w3.org/2000/svg">
                        <path d="M14 11H10V13H14V11Z"/><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
                    </svg>

                    <h1 className="px-2 text-sm">{props.role}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700">
                <FaLinkedinIn color='black'  className='team-card_icon_linkedin lg:text-3xl text-2xl' />

                    <h1 className="px-2 text-sm">California</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http: www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                    </svg>

                    <h1 className="px-2 text-sm">patterson@example.com</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                <FaGithub color='black'  className='team-card_icon_github lg:text-3xl text-2xl'/>


                    <h1 className="px-2 text-sm">patterson@example.com</h1>
                </div>
            </div>
        </div>


    {/* <div className="max-w-xs mx-auto bg-white shadow-lg  overflow-hidden rounded-full hover:shadow-xl scale-[0.8] hover:border-[#2f2e2e]  hover:drop-shadow-xl sm:scale-1 mb-0 hover:scale-[0.9]">
        <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

        <div className="py-5 text-center">
            <a href="#" className="block text-2xl font-bold text-gray-800 ">{props.name}</a>
            <span className="text-sm text-gray-700">{props.role}</span>
        </div>
    </div> */}


</>

     );
}

export default MemberCard;