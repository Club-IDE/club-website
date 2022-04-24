import React, { useEffect } from "react";
// import Members_icon from '../imgs/Members.svg'
import CountUp from 'react-countup';
import aos from "aos";
import 'aos/dist/aos.css';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {TiGroupOutline} from 'react-icons/ti';
import {RiGroupLine} from 'react-icons/ri';
import {RiOrganizationChart} from 'react-icons/ri';
import {VscCalendar} from 'react-icons/vsc';
import '../index.css';




export default function Members() {
    useEffect(() => {
        aos.init({duration : 2000});

      }, [])
    return (
        <section data-aos="fade-up" className="text-black body-font my-8" id="members">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap -m-4 text-center ">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover flex justify-center items-center flex-col">
                           <TiGroupOutline color="#3f599D" size='4rem' className="members-group_icon mb-4"/>
                            <h2 className="title-font font-medium text-3xl text-gray-900 count">
                                <CountUp end={2015} duration={2} />

                            </h2>
                            <p className="leading-relaxed">Members</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover flex justify-center items-center flex-col">
                        <RiGroupLine color="#3f599D" size='4rem' className="members-group_icon mb-4"/>
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={5016} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Attendence</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover flex justify-center items-center flex-col">
                        <RiOrganizationChart color="#3f599D" size='4rem' className="members-group_icon mb-4"/>

                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={48} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Organizer</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:bg-gradient-to-r from-primary to-secondary hover:shadow-2xl Member_hover flex justify-center items-center flex-col">
                        <VscCalendar color="#3f599D" size='4rem' className="members-group_icon mb-4"/>

                            <h2 className="title-font font-medium text-3xl text-gray-900">
                                <CountUp end={52} duration={2} />
                            </h2>
                            <p className="leading-relaxed">Event & Workshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

