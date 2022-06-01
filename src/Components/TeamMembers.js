import MemberCard from './MemberCard';
import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TeamMembers = ({ title, members }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }


  return (
    <>
      <h1 className='text-center lg:text-4xl text-2xl font-bold mt-5 mb-4'>{title}</h1>
      <div className="flex justify-center mx-auto mt-1 mb-7">
        <span className="inline-block w-40 h-1 bg-secondary rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-secondary rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-secondary rounded-full"></span>
      </div>
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        autoPlay = {true}
        keyBoardControl={false}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        renderDotsOutside = {true}
        pauseOnHover={true}
        >
      {members.map((member)=>{
                     return (
                        <MemberCard name={member.name} role={member.role} email={member.email} desc={member.desc} photo={member.photo}/>
                  )
              })}
      </Carousel>
    </>
  );
}
export default TeamMembers;