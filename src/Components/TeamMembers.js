import MemberCard from './MemberCard';
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

const TeamMembers = ({title, members}) => {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        gutter: 70,
        overScan: 1,
        slidesToShow: 3
      };

    const settings2 =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        gutter: 70,
        overScan: 1,
        slidesToShow: 1
      };
    const settings3 =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        gutter: 70,
        overScan: 1,
        slidesToShow: 2
      };

    const slides = []
    
    return ( 
       <>
       <h1 className='text-center lg:text-4xl text-2xl font-bold mt-5 mb-7'>{title}</h1>
      <div className='hidden lg:block mb-10'>
        <Slider { ...settings }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} />
                  )
              })}
        </Slider>
      </div>
      <div className='lg:hidden md:hidden mb-10'>
        <Slider { ...settings2 }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} />
                  )
              })}
        </Slider>
      </div>
      <div className='hidden md:block lg:hidden mb-10'>
        <Slider { ...settings3 }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} />
                  )
              })}
        </Slider>
      </div>
      </> 
    );
  }
export default TeamMembers;