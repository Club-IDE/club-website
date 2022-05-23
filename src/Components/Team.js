import TeamMembers from './TeamMembers';
import TeamImage from '../imgs/Team.png'
import ScrollToTop from './ScrollToTop';
import Akshat_Shah from '../imgs/leads/Akshat_Shah.jpg';
import Akul_Upadhyay from '../imgs/leads/Akul_Upadhyay.jpg';
import Bhakti_Trivedi from '../imgs/leads/Bhakti_Trivedi.jpg';
import Divyesh_Vyas from '../imgs/leads/Divyesh_Vyas.jpeg';
import Hiren_Pokar from '../imgs/leads/Hiren_Pokar.jpg';
import Keyur_Unadkat from '../imgs/leads/Keyur_Unadkat.jpg';
import Krutik_Patel from '../imgs/leads/KRUTIK_PATEL.jpg';
import Naresh_Purohit from '../imgs/leads/Nareshkumar_Purohit.jpg';
import Nigam_Patel from '../imgs/leads/Nigam_Patel.jpeg';
import Param_Radadiya from '../imgs/leads/Param_Radadiya.jpg';
import Pooja_Ranpara from '../imgs/leads/Pooja_Ranpara.jpg';
import Shubham_Jitiya from '../imgs/leads/Shubham_Jitiya.jpg';
import Ashwin_Prajapati from '../imgs/Faculties/Ashwin_Prajapati.jpg';
import Dhaval_Parikh from '../imgs/Faculties/Dhaval_Parikh.jpg';
import Yogendra_Tank from '../imgs/Faculties/Yogendra_Tank.jpg';
import Kunj_Dabhi from '../imgs/Developers/Kunj_Dabhi.jpg';
import Dhruva_Patel from '../imgs/Developers/Dhruva_Patel.jpg';
import Jay_Prajapati from '../imgs/Developers/Jay_Prajapati.png';
import Shlok_Jadeja from '../imgs/Developers/Shlok_Jadeja.jpg'



const Team = () => {

    const faculties = [{name: 'Dr.Dhaval Parikh',role: 'HOD/Senior Advisor', email:'daparikh@gecg28.ac.in', photo:Dhaval_Parikh},
    {name: 'Prof. Yogendra Tank',role: 'Faculty Coordinator', email:'yogendratank@gecg28.ac.in', photo:Yogendra_Tank},
    {name: 'Prof. Ashwin Prajapati',role: 'Faculty Coordinator', email:'ashvinkumar@gecg28.ac.in', photo:Ashwin_Prajapati},
    {name: 'Prof. Ashwin Prajapati',role: 'Faculty Coordinator', email:'ashvinkumar@gecg28.ac.in', photo:Ashwin_Prajapati}

]

    const ClubMembers = [
        {name:'Param Radadiya' , role:'President', email:'paramradadiya3@gmail.com' , desc:'Hey, I\'m Param Radadiya!! I\'m a quick learner and a DIY person :p I like to conduct events and interact with people. You can find me with my headphones b\'cuz I love to listen to the songs 🎧... I\'m a leader, who is creating more leaders : \)', photo:Param_Radadiya},
        {name:'Pooja Ranpara' , role:'Vice President', email:'poojajranpara15@gmail.com' , desc:'Hello World! I am Pooja Ranpara. Just an ordinary person with extraordinary dreams. My whole world is surrounded just by coding and debugging. Voodoo Programming!', photo:Pooja_Ranpara},
        {name:'Keyur Unadkat' , role:'Secretary', email:'kryolitimaniac@gmail.com' , desc:'Hi! This is Keyur, a research oriented programming enthusiast who loves to learn new things. I have a never give up attitude which helps me handle complex problems. My key interests include deep learning, data analytics and problem solving. I love to help people with academics and projects.', photo:Keyur_Unadkat},
        {name:'Nigam Patel' , role:'Senior Student Chair', email:'nigamrrpatel@gmail.com' , desc:'', photo:Nigam_Patel},
        {name:'Akul Upadhyay' , role:'Senior Student Chair', email:'akulupadhyay19@gmail.com' , desc:'', photo:Akul_Upadhyay},
        {name:'Bhakti Trivedi' ,role:'Documentation Head' , email:'' , desc:'Hello, I am Bhakti Trivedi, a web developer, and competitive programming enthusiast. I like to learn new skills and explore unique algorithms. I am a part of club IDE and CodeChef college chapter at GECGn, enjoying helping and guiding peers.', photo:Bhakti_Trivedi},
        {name:'Shubham Jitiya' , role:'Event Head', email:'jitiya66@gmail.com'   , desc:'Hello, I\'m Shubham Jitiya, a passionate android developer. I like to teach & guide my peers. I have published 4 android apps on play store, built in java, having 1800+ downloads with positive ratings of 4.9. My other app [GOD - Goal of the day] developed during ASJ is featured by Google. Currently, exploring kotlin and flutter.', photo:Shubham_Jitiya},
        {name:'Hiren Pokar' , role:'Android Development Lead', email:'pokarhiren7@gmail.com' , desc:'', photo:Hiren_Pokar},
        {name:'Akshat Shah' , role:'Web Development Lead', email:'shahakshat1304@gmail.com' , desc:'', photo:Akshat_Shah},
        {name:'Naresh Purohit' , role:'Start Up Lead', email:'nareshkumarpurohit7890@gmail.com ' , desc:'Hey I\'m Purohit Naresh . I love technology. I always enjoy learning new things and I\'m passionate  about solving real-world problem with my vision correction and building a revolutionary solution.', photo:Naresh_Purohit},
        {name:'Krutik Patel' , role:'AI/ML Lead', email:'er.krutikpatel31@gmail.com' , desc:'', photo:Krutik_Patel},
        {name:'Divyesh Vyas' , role:'CP Group Lead', email:'divyeshvyas562@gmail.com' , desc:'Hello, This is Divyesh Vyas! ✨ A web developer and coding enthusiast.I Like to play with Bits and I\'m Flexible to switch between new software and technologies.  : \)', photo:Divyesh_Vyas},
    ];
    const Developers = [
        {name:'Kunj Dabhi' , role:'Developer' , email:'kunjdabhi0808@gmail.com', desc:'Hey 👋! This is Kunj, an aspiring Web Developer. Currently Exploring world of Web technologies and learning something new everyday.', photo:Kunj_Dabhi},

        {name:'Shlok Jadeja' , role:'Developer', email:'shlokjadeja177@gmail.com', desc:'Hi!😁 Shlok Jadeja signing in on a journey of web dev and diving into the world of computers. I am the glue to the team, well not really, nobody listens to me here. Yet, when in need - I love to work together with them and tackle problems while making a change. Call me a leader yet? Shlok Jadeja out.', photo:Shlok_Jadeja},

        {name:'Prachi Patel' , role:'Developer', email:'', desc:'', photo:''},

        {name:'Dhruva Patel' , role:'Developer', email:'pateldhruva751@gmail.com', desc:'Greetings!✨ Dhruva Patel buzzing with tech this side. A tech enthusiast who loves exploring various fields but web devlopment has always grabbed my attention. I enjoy interacting with people and making tasks interesting is my side hustle, because of course \'nobody likes boring\', right!? On a journey to learn with so much fun, cannot stop me now! ', photo:Dhruva_Patel},

        {name:'Jay Prajapati' , role:'Developer', email:'jay54prajapati@gmail.com', desc:'Hi! I\'m Jay. I enjoy designing and creating apps & websites. A machine Learning enthusiast keen on expressing, learning, and open to new opportunities. ', photo:Jay_Prajapati},

    ]



    return (
        <>
        <ScrollToTop />
        <section className="text-gray-600 body-font">
            <div className="container mx-auto lg:flex flex-col  py-6 md:flex-row items-center bg-[#e5e7eb] max-w-full">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:text-left flex flex-col md:items-start  lg:mb-16 md:mb-0 items-center text-center lg:ml-32 md:mx-auto">
                    <h1 className="title-font font-bold xl:text-[3.5rem] text-[2rem] mt-32 leading-normal mb-4 text-secondary">Meet Our
                    Super Enthusiastic Team
                    </h1>

                </div>
                <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mx-auto ">
                    <img className="object-cover object-center " alt="hero" src={TeamImage} />
                </div>
            </div>
        </section>

            <TeamMembers title={'Faculties'} members={faculties} />
            <TeamMembers title={'Club Leads'} members={ClubMembers} />
            <TeamMembers title={'Developers'} members={Developers} />



        </>


     );

    }

export default Team;