import React, {useState} from "react";
import demo from '../demo.jpg';
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import '../index.css'
const MemberCard = (props) => {
    return ( 
        <div className="">
    
        <div class="h-full text-center drop-shadow-xl">
                    <img alt="" class="lg:w-32 w-28 h-28 lg:h-32 mb-4 object-cover object-center rounded-full inline-block border-4  mt-3 p-1 member-photo drop-shadow-xl outline-black" src={demo} />
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