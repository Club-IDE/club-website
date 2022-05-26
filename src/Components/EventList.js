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






const EventList = () => {

    const events =[
        {
            name: 'Club Introductory session',
            host: 'Akul Upadhyay',
            mode: 'online',
            date: '29th May 2021',
            club: 'Club IDE',
            thumbnail: IDE,
        },
        {
            name: 'General Discussion',
            host: 'Param Radadiya',
            mode: 'online',
            date: '5th June 2021',
            club: 'Club IDE',
            thumbnail: IDE,
        },
        {
            name: 'Web Development Introduction',
            host: 'Akshat Shah',
            mode: 'online',
            date: '6th June 2021',
            club: 'Club IDE',
            thumbnail: WebDevelopment,
        },
        {
            name: 'Android Development',
            host: 'Hiren Pokar',
            mode: 'online',
            date: '8th June 2021',
            club: 'Club IDE',
            thumbnail: Android,
        },
        {
            name: 'Competitive Programming',
            host: 'Divyesh Vyas',
            mode: 'online',
            date: '9th June 2021',
            club: 'Club IDE',
            thumbnail: CP,
        },
        {
            name: 'Artificial Intelligence/ Machine Learning',
            host: 'Krutik Patel',
            mode: 'online',
            date: '10th June 2021',
            club: 'Club IDE',
            thumbnail: ML,
        },
        {
            name: 'Entrepreneurship and Startup',
            host: 'Nareshkumar Purohit',
            mode: 'online',
            date: '11th June 2021',
            club: 'Club IDE',
            thumbnail: Enterprenurship,
        },
        {
            name: 'IDE Code Sprint 1.0 - A Coding Contest',
            host: ['Divyesh Vyas', 'Keyur Unadkat', 'Bhakti Trivedi','Shubham Jitiya'],
            mode: 'online',
            date: '11th July 2021',
            club: 'Club IDE + CodeChef GecgGn Chapter',
            thumbnail: IDE,
        },
        {
            name: 'Entrepreneurship and Start-up Basic',
            host: 'Sanidhya Patel',
            mode: 'online',
            date: '18th July 2021',
            club: 'Club IDE',
            thumbnail: Enterprenurship,
        },
        {
            name: 'AI/ML Session 0',
            host: 'Krutik Patel',
            mode: 'online',
            date: '25th July 2021',
            club: 'Club IDE',
            thumbnail: ML,
        },
        {
            name: 'Engineer’s day celebration',
            host: ['Bhakti Trivedi', 'Shreya Patel'],
            mode: 'online',
            date: '15th September',
            club: 'Club IDE',
            thumbnail: Engineer,
        },
        {
            name: 'Everything About Hacktoberfest',
            host: 'Divyesh vyas',
            mode: 'online',
            date: '2nd October 2021',
            club: 'GDSC GECG',
            thumbnail: Hectoberfest,
        },
        {
            name: 'Codechef College Chapter Introduction',
            host: ['Divyesh Vyas','Hardik Kardam', 'Bhakti Trivedi', 'Suryadip Vaghela'],
            mode: 'online',
            date: '9th October 2021',
            club: 'Codechef GecGn Chapter',
            thumbnail: CodechefIntro,
        },
        {
            name: 'Android Discussion',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '10th October 2021',
            club: 'GDSC GECG',
            thumbnail: Android,
        },
        {
            name: 'Platform tour & Getting started with CP',
            host: 'Sachin Jangir',
            mode: 'online',
            date: '17th October 2021',
            club: 'Codechef GecGn Chapter',
            thumbnail: CP,
        },
        {
            name: 'Info Session GDSC GEC Gandhinagar',
            host: 'Param Radadiya',
            mode: 'online',
            date: '19th October 2021',
            club: 'GDSC GECG',
            thumbnail: GDSCInfo,
        },
        {
            name: 'Analysis of algorithm and its importance',
            host: 'Hardik Kardam',
            mode: 'online',
            date: '23rd October 2021',
            club: 'Club IDE + Codechef GecGn Chapter',
            thumbnail: Algorithm,
        },
        {
            name: 'Pathway to the future – Web',
            host: 'Akshat Shah',
            mode: 'online',
            date: '30th October 2021',
            club: 'Club IDE',
            thumbnail: WebDevelopment,
        },
        {
            name: 'Pathway to the future – Android',
            host: ['Hiren Pokar', 'Shubham Jitiya'],
            mode: 'online',
            date: '31th October 2021',
            club: 'Club IDE',
            thumbnail: Android,
        },
        {
            name: 'Andoid Study JAM - 1',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '30th November 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam1,
        },
        {
            name: 'Andoid Study JAM - 2',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '19th December 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam2,
        },
        {
            name: 'Andoid Study JAM - 3',
            host: 'Shubham Jitiya',
            mode: 'online',
            date: '22th December 2021',
            club: 'GDSC GECG',
            thumbnail: AndroidStudyjam3,
        },
        {
            name: 'Bit Manipulation',
            host: 'Divyesh Vyas',
            mode: 'online',
            date: '17th January 2022',
            club: 'Codechef GecGn Chapter',
            thumbnail: BitManipulation,
        },
        {
            name: 'Flutter Festival - 1 (Introduction)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '25th February 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter1,
        },
        {
            name: 'Flutter Festival - 2 (Basics of Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '9th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter2,
        },
        {
            name: 'Interview Preparation & Resume Building',
            host: 'Simita Sambyal (Speaker Session)',
            mode: 'online',
            date: '12th Mrach 2022',
            club: 'GDSC GECG',
            thumbnail: Resume,
        },
        {
            name: 'Flutter Festival - 3 (UI in Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '17th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter3,
        },
        {
            name: 'Flutter Festival - 4 (APIs in Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '19th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter4,
        },
        {
            name: 'Flutter Festival - 5 (Firebase with Flutter)',
            host: 'Ayush Solanki',
            mode: 'online',
            date: '26th March 2022',
            club: 'GDSC GECG',
            thumbnail: Flutter5,
        },
        {
            name: 'Getting Started with ML & Crowdsource - ML Study Jams',
            host: ['Jay Prajapati', 'Param Radadiya'],
            mode: 'offline',
            date: '4th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML1,
        },
        {
            name: 'Explore ML with Neural Networks - ML Study Jams',
            host: 'Jay Prajapati',
            mode: 'online',
            date: '10th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML2,
        },
        {
            name: 'Build a First Model Using Python - ML Study Jams',
            host: 'Jay Prajapati',
            mode: 'online',
            date: '13th May 2022',
            club: 'GDSC GECG',
            thumbnail: ML3,
        },
        {
            name: 'Learn HTML/CSS Out of the Box',
            host: 'Krishn Panchal',
            mode: 'online',
            date: '18th May 2022',
            club: 'GDSC GECG',
            thumbnail: WebCampaign,
        },
        {
            name: 'C/CPP FOR CPP BOOTCAMP',
            host: 'Divyesh Vyas, Aaditya Chaturvedi, Aaditya Lad, Kartik Ramchandani, Parth Parmar, Param Radadiya',
            mode: 'Online+Offline',
            date: '18th May 2022',
            club: 'Codechef GecGn Chapter, Club IDE',
            thumbnail: CP,
        },

    ]



    return (   
        <div className="flex flex-wrap justify-evenly lg:gap-8 gap-0 items-center mt-20 lg:px-10 md:px-12">
            {events.reverse().map((event)=>{
                return <Eventcard events={event} />
            })}
        </div>
     );
}
 
export default EventList;