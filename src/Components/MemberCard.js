import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import demo from '../demo.jpg';
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import '../index.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'



function MemberCard(props) {

    return (

        <div class="lg:w-[19%] md:w-[34%] lg:mb-7 mb-6 p-4 bg--[#ffffff] mt-4 bg-[#F3F8FF] mx-auto border-b-8-hidden hover:border-[#2f2e2e] w-[55%]  member-card hover:drop-shadow-xl border-2">
                <div class="h-full">
                    <img alt="" class="lg:w-20 w-20 h-20 lg:h-20 mb-4 object-cover object-center rounded-full inline-block border-4  mt-3 p-1 member-photo" src={demo} />
                    <h1 className="text-black lg:text-2xl text-2xl font-bold">{props.name}</h1>
                    <h2 className="text-[#00000] my-2 font-semibold">{props.role}</h2>
                    <p className="text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente sit maiores laudantium nisi accusantium similique quam quas facere sint?</p>
                    <div className='flex justify-center mt-5'>
                        <FaTwitter color='black'   className='team-card_icon_twitter transition-all lg:text-3xl text-2xl'  />
                        <FaLinkedinIn color='black'  className='lg:mx-6 mx-7 team-card_icon_linkedin lg:text-3xl text-2xl' />
                        <FaGithub color='black'  className='team-card_icon_github lg:text-3xl text-2xl'/>
                    </div>
                </div>
            </div>


     );
}

export default MemberCard;