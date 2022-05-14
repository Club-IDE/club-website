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
        slidesToShow: 3,
        adaptiveHeight: true
      };

    const settingsForSmall =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        overScan: 1,
        slidesToShow: 1,
        adaptiveHeight: true
      };
    const settingsForMedium =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dotsScroll: 3,
        overScan: 1,
        slidesToShow: 2,
        adaptiveHeight: true
      };

    const slides = []

    return (
       <>
       <h1 className='text-center lg:text-4xl text-2xl font-bold mt-5 mb-4'>{title}</h1>
       <div className="flex justify-center mx-auto mt-1 mb-7">
                        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
                    </div>
      <div className='hidden lg:block mb-10'>
        <Slider { ...settingsForLarge }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} email={member.email} desc={member.desc} photo={member.photo} />
                  )
              })}
        </Slider>
      </div>
      <div className='lg:hidden md:hidden mb-10'>
        <Slider { ...settingsForSmall }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} email={member.email} desc={member.desc} photo={member.photo}/>
                  )
              })}
        </Slider>
      </div>
      <div className='hidden md:block lg:hidden mb-10'>
        <Slider { ...settingsForMedium }>
        {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} email={member.email} desc={member.desc} photo={member.photo}/>
                  )
              })}
        </Slider>
      </div>
      </>
    );
  }
export default TeamMembers;