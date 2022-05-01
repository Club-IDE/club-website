import MemberCard from './MemberCard';
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

const TeamMembers = ({title, members}) => {
    const settingsForLarge =  {
        arrows: true,
        arrowsBlock: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        dotsScroll: 3,
        overScan: 1,
        slidesToShow: 3
      };

    const settingsForSmall =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        overScan: 1,
        slidesToShow: 1
      };
    const settingsForMedium =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dotsScroll: 3,
        overScan: 1,
        slidesToShow: 2
      };

    const slides = []

    return (
       <>
       <h1 className='text-center lg:text-4xl text-2xl font-bold mt-5 mb-7'>{title}</h1>
      <div className='hidden lg:block mb-10'>
        <Slider { ...settingsForLarge }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} />
                  )
              })}
        </Slider>
      </div>
      <div className='lg:hidden md:hidden mb-10'>
        <Slider { ...settingsForSmall }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} />
                  )
              })}
        </Slider>
      </div>
      <div className='hidden md:block lg:hidden mb-10'>
        <Slider { ...settingsForMedium }>
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