import React, {useState} from "react";
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import Flippy, {FrontSide, BackSide} from 'react-flippy';
import '../index.css'




function MemberCard(props) {

    return (
    <>
    <div className="scale-[0.7]  md:scale-[1] lg:scale-[1] relative right-[26px] lg:right-0 md:right-0">
        <Flippy
        className='py-1 lg:ml-20 bg-white'
        flipOnHover={true}
        flipOnClick={false}
        flipDirection="horizontal"
        style={{width:"350px", height:"400px" }}
    >
        <FrontSide>
        <div class="flex flex-col items-center p-4  sm:p-6  rounded-xl ">
                    <img class="object-cover w-[250px] rounded-xl " src={props.photo} alt="" />
                    <div className="text-center">

                    <h1 class="mt-4 text-2xl font-semibold text-secondary capitalize ">{props.name}</h1>

                    <p class="mt-2 text-primary capitalize">{props.role}</p>

                    </div>
                </div>
        </FrontSide>
        <BackSide>
        <div className="flex justify-center flex-col">
                <p className="mt-12 text-secondary font-semibold">
                {props.desc}
                </p>

            <a href='' target='blank' className="flex items-center mt-4 text-gray-70 group cursor-pointer">
            <FaLinkedinIn color='#0e76a8'  className='team-card_icon_linkedin lg:text-3xl text-2xl' />

                <h1 className="px-2 text-sm font-bold group-hover:text-[#0e76a8]  transition-all">California</h1>
            </a>

            <a className="flex items-center mt-4 text-gray-700 group cursor-pointer">
                <MdOutlineEmail color='#c71610' className='team-card_icon_email lg:text-3xl text-2xl ' />

                <h1 className="px-2 text-sm font-bold group-hover:text-[#c71610] ">{props.email}</h1>
            </a>
            <a href='' target='blank'className="flex items-center mt-4 text-gray-700 group cursor-pointer">
                <FaGithub color='#171515' className='team-card_icon_github lg:text-3xl text-2xl' />

                <h1 className="px-2 text-sm font-bold group-hover:text-[#171515]">github</h1>
            </a>
                    </div>
        </BackSide>
    </Flippy>
    </div>

</>

     );
}

export default MemberCard;