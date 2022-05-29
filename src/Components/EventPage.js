
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import events from '../imgs/event.png';
import { useState } from "react";
// import EventList from "./EventList";
import Eventcard from "./Eventcard";
import WebCampaign from '../imgs/Events/may18_webCampaign.webp';
import AndroidStudyjam1 from '../imgs/Events/nov30_androidStudyjam.webp';
import AndroidStudyjam2 from '../imgs/Events/dec19_androidStudyJam.webp';
import AndroidStudyjam3 from '../imgs/Events/dec22_androidStudyjam.webp';
import BitManipulation from '../imgs/Events/jan17_bitManipulation.webp';
import Flutter1 from '../imgs/Events/feb25_flutter.webp';
import Flutter2 from '../imgs/Events/march9_flutter.webp';
import Flutter3 from '../imgs/Events/march17_flutter.webp';
import Flutter4 from '../imgs/Events/march19_flutter.webp';
import Flutter5 from '../imgs/Events/march26_flutter.webp';
import Resume from '../imgs/Events/march12_speakerSession.webp';
import ML1 from '../imgs/Events/may4_exploreML.webp';
import ML2 from '../imgs/Events/may10_exploreML.webp';
import ML3 from '../imgs/Events/may13_MLStudyjam.webp';
import GDSCInfo from '../imgs/Events/oct19_infoSession.webp';
import Hectoberfest from '../imgs/Events/oct1_speakerSession.webp';
import CodechefIntro from '../imgs/Events/CodeChefLogo.png';
import WebDevelopment from '../imgs/Events/webDeveploment.jpg';
import Android from '../imgs/Events/android.png';
import Algorithm from '../imgs/Events/algorithm.webp';
import CP from '../imgs/Events/cp.png';
import Engineer from '../imgs/Events/engineersDay.jpg';
import Enterprenurship from '../imgs/Events/enterprenurship.png';
import ML from '../imgs/Events/ml.webp';
import IDE from '../imgs/Events/IDELogo.png';

const Eventpage = () => {

    let events =[
        {
            name: 'Club Introductory session',
            host: 'Akul Upadhyay',
            mode: 'online',
            date: '29th May 2021',
            club: 'Club IDE',
            thumbnail: IDE,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/10mSgb2EUkgKqJQOJWzGScMURGkntttvF/view"
        },
        {
            name: 'General Discussion',
            host: 'Param Radadiya',
            mode: 'online',
            date: '5th June 2021',
            club: 'Club IDE',
            thumbnail: IDE,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1i38iFODIIJAtYPPORu4mICZyNwipmopB/view"
        },
        {
            name: 'Web Development Introduction',
            host: 'Akshat Shah',
            mode: 'online',
            date: '6th June 2021',
            club: 'Club IDE',
            thumbnail: WebDevelopment,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1yMj3zfccDpaXr4YMse0Xc-mZoV1X0UMo/view"
        },
        {
            name: 'Android Development',
            host: 'Hiren Pokar',
            mode: 'online',
            date: '8th June 2021',
            club: 'Club IDE',
            thumbnail: Android,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1qHw5Cfz3n66x6CnJABeDU8fTAN3Qlg7v/view"
        },
        {
            name: 'Competitive Programming',
            host: 'Divyesh Vyas',
            mode: 'online',
            date: '9th June 2021',
            club: 'Club IDE',
            thumbnail: CP,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1DRIY7CPMKtxJFdprjmp9WVieP4tHq-fJ/view"
        },
        {
            name: 'Artificial Intelligence/ Machine Learning',
            host: 'Krutik Patel',
            mode: 'online',
            date: '10th June 2021',
            club: 'Club IDE',
            thumbnail: ML,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1xfqed6pLjrMtdXoRTNj-4WSSHc18Qpid/view"
        },
        {
            name: 'Entrepreneurship and Startup',
            host: 'Nareshkumar Purohit',
            mode: 'online',
            date: '11th June 2021',
            club: 'Club IDE',
            thumbnail: Enterprenurship,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/19zVkHZ-vHrB-ZrvC-ZEKLgs5D1BEZPU-/view"
        },
        {
            name: 'IDE Code Sprint 1.0 - A Coding Contest',
            host: ['Divyesh Vyas', 'Keyur Unadkat', 'Bhakti Trivedi','Shubham Jitiya'],
            mode: 'online',
            date: '11th July 2021',
            club: 'Club IDE + CodeChef GecgGn Chapter',
            thumbnail: IDE,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/13JVlN_Gc-UNdJ-QcRqP7XOJsMhAPlHN0/view"
        },
        {
            name: 'Entrepreneurship and Start-up Basic',
            host: 'Sanidhya Patel',
            mode: 'online',
            date: '18th July 2021',
            club: 'Club IDE',
            thumbnail: Enterprenurship,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1jo2_NYB0yAkiBp7DwLq9YZOPvSTM_V-m/view"
        },
        {
            name: 'AI/ML Session 0',
            host: 'Krutik Patel',
            mode: 'online',
            date: '25th July 2021',
            club: 'Club IDE',
            thumbnail: ML,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1fj1RV68k3vXonYAFAABg6y77wwihSo52/view"
        },
        {
            name: 'Engineer’s day celebration',
            host: ['Bhakti Trivedi', 'Shreya Patel'],
            mode: 'online',
            date: '15th September',
            club: 'Club IDE',
            thumbnail: Engineer,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1gIwE6O1V3f_2vVISiMy5HszieLc0nvR4/view"
        },
        {
            name: 'Everything About Hacktoberfest',
            host: 'Divyesh vyas',
            mode: 'online',
            date: '2nd October 2021',
            club: 'GDSC GECG',
            thumbnail: Hectoberfest,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1gIwE6O1V3f_2vVISiMy5HszieLc0nvR4/view"
        },
        {
            name: 'Codechef College Chapter Introduction',
            host: ['Divyesh Vyas','Hardik Kardam', 'Bhakti Trivedi', 'Suryadip Vaghela'],
            mode: 'online',
            date: '9th October 2021',
            club: 'Codechef GecGn Chapter',
            thumbnail: CodechefIntro,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1aoEx6umBuHvH_Ggv5YZwcM7wBGSWm-sj/view"
        },
        {
            name: 'Android Discussion',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '10th October 2021',
            club: 'GDSC GECG',
            thumbnail: Android,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/18WD1paR0yYqLcxbHJtw5Xl3trS5SKypN/view"
        },
        {
            name: 'Platform tour & Getting started with CP',
            host: 'Sachin Jangir',
            mode: 'online',
            date: '17th October 2021',
            club: 'Codechef GecGn Chapter',
            thumbnail: CP,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1urq0sLESvA467EzkefdOCFNa02CL37oF/view"
        },
        {
            name: 'Info Session GDSC GEC Gandhinagar',
            host: 'Param Radadiya',
            mode: 'online',
            date: '19th October 2021',
            club: 'GDSC GECG',
            thumbnail: GDSCInfo,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1e34yCnJnxLUwsT7-9DVUOYxpbNyprBcm/view"
        },
        {
            name: 'Analysis of algorithm and its importance',
            host: 'Hardik Kardam',
            mode: 'online',
            date: '23rd October 2021',
            club: 'Club IDE + Codechef GecGn Chapter',
            thumbnail: Algorithm,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1cnZy5rbQqJuUIHuHULaQhSlaRsrKxVc-/view"
        },
        {
            name: 'Pathway to the future – Web',
            host: 'Akshat Shah',
            mode: 'online',
            date: '30th October 2021',
            club: 'Club IDE',
            thumbnail: WebDevelopment,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1BAdbPAw6kGBTaWHXNRWUmeOjy9DDem-5/view"
        },
        {
            name: 'Pathway to the future – Android',
            host: ['Hiren Pokar', 'Shubham Jitiya'],
            mode: 'online',
            date: '31th October 2021',
            club: 'Club IDE',
            thumbnail: Android,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1V1MsfTzsagsbe_Hrs3jatGWYmkLljeBQ/view"
        },
        {
            name: 'Andoid Study JAM - 1',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '30th November 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam1,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1Xxam5r0pk4DyPCW4EiYpbreyURojVm3-/view"
        },
        {
            name: 'Andoid Study JAM - 2',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '19th December 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam2,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1_R5I2DPQpif5Nau_CaOetH0DKQl6YcnW/view"
        },
        {
            name: 'Andoid Study JAM - 3',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '22th December 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam3,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/10tjg4TZjVQI00uaCW9GY3UaUBd28XY2H/view"
        },
        {
            name: 'Bit Manipulation',
            host: 'Divyesh Vyas',
            mode: 'online',
            date: '17th January 2022',
            club: 'Codechef GecGn Chapter',
            thumbnail: BitManipulation,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1nINNcJdJJ03tNzelM_6SOaWylJ8sgWKl/view"
        },
        {
            name: 'Flutter Festival - 1 (Introduction)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '25th February 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter1,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1iUMuy2fdsRlpjo0uDMq8t-wxrW_BaI0i/view"
        },
        {
            name: 'Flutter Festival - 2 (Basics of Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '9th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter2,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1Yjo_dN1V8hRso0TdVtdArQuh2-bHrvQX/view"
        },
        {
            name: 'Interview Preparation & Resume Building',
            host: 'Simita Sambyal (Speaker Session)',
            mode: 'online',
            date: '12th Mrach 2022',
            club: 'GDSC GECG',
            thumbnail: Resume,
            isCompleted: true,
            Reportlink: ""
        },
        {
            name: 'Flutter Festival - 3 (UI in Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '17th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter3,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1RYmIRBn-AwR_damdmwCn1nIMON4FDAD8/view"
        },
        {
            name: 'Flutter Festival - 4 (APIs in Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '19th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter4,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1InSKHIyIjsx24bUB1Qe33s4JCaFGxQly/view"
        },
        {
            name: 'Flutter Festival - 5 (Firebase with Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '26th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter5,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1AtJc8K-hQ4Xodp0Q0MDEqT2DKbHQCNS1/view"
        },
        {
            name: 'Getting Started with ML & Crowdsource - ML Study Jams',
            host: ['Jay Prajapati', 'Param Radadiya'],
            mode: 'offline',
            date: '4th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML1,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1EtPXcVGe8zKIYtE1U0dhH8mF4a-TozRG/view"
        },
        {
            name: 'Explore ML with Neural Networks - ML Study Jams',
            host: 'Jay Prajapati',
            mode: 'online',
            date: '10th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML2,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1Lhoe2iHaz1LubMm73dbwG_ojwCHt5Bnb/view"
        },
        {
            name: 'Build a First Model Using Python - ML Study Jams',
            host: 'Jay Prajapati',
            mode: 'online',
            date: '13th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML3,
            isCompleted: true,
            Reportlink: "https://drive.google.com/file/d/1Lhoe2iHaz1LubMm73dbwG_ojwCHt5Bnb/view"
        },
        {
            name: 'Learn HTML/CSS Out of the Box',
            host: 'Krishn Panchal',
            mode: 'online',
            date: '18th May 2022',
            club: 'GDSC GECG',
            thumbnail: WebCampaign,
            isCompleted: false,
            Reportlink: "https://drive.google.com/file/d/1R29UML11_uiNQe3KhMCKyg9YiQmrf-FQ/view"
        },
        {
            name: 'C/CPP FOR CPP BOOTCAMP',
            host: 'Divyesh Vyas, Aaditya Chaturvedi, Aaditya Lad, Kartik Ramchandani, Parth Parmar, Param Radadiya',
            mode: 'Online+Offline',
            date: '18th May 2022',
            club: 'Codechef GecGn Chapter, Club IDE',
            thumbnail: CP,
            isCompleted: false,
            Reportlink: ""
        },


    ]

    let [eventsFiltered , setEventsFiltered] = useState(events.reverse());
    const showPastEvents = ()=>{
        eventsFiltered = events.filter(event=> event.isCompleted === true);
        setEventsFiltered(eventsFiltered);
    }
    const showUpcomingEvents = ()=>{
        eventsFiltered = events.filter(event=> event.isCompleted === false);
        setEventsFiltered(eventsFiltered.reverse());
    }

    return (
        <>
        <ScrollToTop />

        <div className="pt-32 ">
            <h1 className=" pb-4  text-6xl font-bold w-max m-auto text-primary">Events</h1>
        </div>
        <div className="flex justify-evenly items-center w-[100%] m-auto">
            <button className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3 border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl" onClick={showUpcomingEvents}>Upcoming Events</button>
            <button  className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3  border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl" onClick={showPastEvents}>Past Events</button>
        </div>

        <div className="flex flex-wrap justify-evenly lg:gap-8 gap-0 items-center mt-20 lg:px-10 md:px-12">
            {eventsFiltered.map((event)=>{
                return <Eventcard events={event} />
            })}
        </div>



        <div className="pt-32 ">
            <h1 className=" pb-4  text-6xl font-bold w-max m-auto text-primary">Workshops</h1>
        </div>
        <div className="flex justify-evenly items-center w-[100%] m-auto">
            <button className="mt-20 bg-white shadow-lg shadow-gray-600 px-6 py-3 border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Upcoming Workshop</button>
            <button  className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3  border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Past Workshop</button>
        </div>

        <div className="items-center lg:flex mt-16">

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-[50%] h-[50%] lg:max-w-2xl" src={events} alt="Catalogue-pana.svg"/>
                </div>


                    <div className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <p className="mt-6 lg:text-3xl text-center text-xl text-gray-500 leading-9">We're Wroking on Workshops ideas<br />Stay Tuned </p>

                        </div>
                    </div>
        </div>



        </>
     );
}

export default Eventpage;