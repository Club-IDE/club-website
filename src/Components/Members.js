import React from "react";
// import Members_icon from '../imgs/Members.svg'
import CountUp from 'react-countup';
import { IoMdArrowRoundForward } from 'react-icons/io';



export default function Members() {
    return (
        <section className="text-black body-font my-8" id="members">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4 text-center ">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>


                            <h2 className="title-font font-medium text-3xl text-gray-900 count">
                                <CountUp end={2015} duration={2} />

                            </h2>
                            <p className="leading-relaxed">Members</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={5016} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Attendence</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={48} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Organizer</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-primary  w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={52} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Event and Workshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

