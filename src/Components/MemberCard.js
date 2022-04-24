import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import demo from '../demo.jpg';
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import '../index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'



function MemberCard(props) {
    
    return ( 
        
        <div class="lg:w-[19%] md:w-[34%] lg:mb-7 mb-6 p-4 bg--[#ffffff] mt-4 bg-[#F3F8FF] mx-auto border-b-8-hidden hover:border-[#000000] w-[55%]  member-card hover:drop-shadow-xl">
                <div class="h-full text-center">
                    <img alt="" class="lg:w-32 w-28 h-28 lg:h-32 mb-4 object-cover object-center rounded-full inline-block border-4  mt-3 p-1 member-photo" src={demo} />
                    <h1 className="text-black lg:text-2xl text-2xl">{props.name}</h1>
                    <h2 className="text-[#00000] lg:text-xl text-xl my-1">{props.role}</h2>
                    <span className="text-center text-black text-md">johndoe0101@gmail.com</span>
                    <div className='flex justify-center mt-3'>
                        <FaTwitter color='black'   className='team-card_icon_twitter transition-all lg:text-3xl text-2xl'  />
                        <FaLinkedinIn color='black'  className='lg:mx-6 mx-7 team-card_icon_linkedin lg:text-3xl text-2xl' />
                        <FaGithub color='black'  className='team-card_icon_github lg:text-3xl text-2xl'/>
                    </div>
                </div>
            </div>
       
       
     );
}
 
export default MemberCard;