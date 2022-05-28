import Bloglist from "./BlogList";
import BlogList_Horizontal from "./BlogList_Horizontal";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, Outlet, Link , BrowserRouter } from "react-router-dom";

import Sept21_Blog1 from './Blogs/Sept21_Blog1'
import BlogCard from "./BlogCard";
import Blog_1042022 from "../imgs/Blog_Imgs/Post_Imgs/apr22_1.jpg";

import Blog_2042022 from "../imgs/Blog_Imgs/Post_Imgs/apr22_2.jpg";

import Blog_1032022 from "../imgs/Blog_Imgs/Post_Imgs/mar22_1.jpg";

import Blog_2032022 from '../imgs/Blog_Imgs/Post_Imgs/mar22_2.jpg';

import Blog_1022022 from '../imgs/Blog_Imgs/Post_Imgs/feb22_1.jpg';

import Blog_2022022 from '../imgs/Blog_Imgs/Post_Imgs/feb22_2.png';

import Blog_1012022 from '../imgs/Blog_Imgs/Post_Imgs/jan22_1.jpg';

import Blog_2012022 from '../imgs/Blog_Imgs/Post_Imgs/jan22_2.jpg';

import Blog_1122021 from '../imgs/Blog_Imgs/Post_Imgs/dec21_1.jpg';

import Blog_2122021 from '../imgs/Blog_Imgs/Post_Imgs/dec21_2.jpg';

import Blog_1112021 from '../imgs/Blog_Imgs/Post_Imgs/nov21_1.jpg';

import Blog_2112021 from '../imgs/Blog_Imgs/Post_Imgs/nov21_2.jpg';

import Blog_1102021 from '../imgs/Blog_Imgs/Post_Imgs/oct21_1.jpg';

import Blog_2102021 from '../imgs/Blog_Imgs/Post_Imgs/oct21_2.webp';

import Blog_1092021 from '../imgs/Blog_Imgs/Post_Imgs/sept21_1.jpg';

import Blog_2092021 from '../imgs/Blog_Imgs/Post_Imgs/sept21_2.png';


const Blogpage = () => {

    const blogCards = [
      {
        id: 1042022,
        backImage: Blog_1042022 ,
        date:'April-22',
        title: 'Quality of Work and Time',
        type: 'PersonalDevelopment',
        desc:`Most of us might be facing problems related to time and pending work. Also, we know how much important is time management skill. To do something, it is not important to take much amount of time but important is that quality time and task. In my perspective, you just have to take the right decision at right time. You have to do today's task. Thus, don't need to worry about tomorrow. If you will make the right decision but the time is wrong then your decision will become wrong, too.`,
        category: 'non-technical',
        AppreanceNumber: '16',
      },
      {
        id: 2042022,
        backImage: Blog_2042022 ,
        date:'April-22',
        title: 'JUST Follow Up',
        type: 'space',
        desc:`Here is one of the most important space exploration missions of our decade, JWST was in the works for the last 20 years. It is as big as our volleyball ground and colder than the nitro biscuit that you ate last year. It can peek into the past as it can read the faintest of the infrared. This trendy design is more complicated than `,
        category: 'technical',
        AppreanceNumber: '15',
      },
        {
          id: 1032022,
          backImage: Blog_1032022 ,
          date:'March-22',
          title: 'Value Addition',
          type: 'inspiration',
          desc:`Sometime ago, I shared a quote on Twitter that says, People will not consider you or listen to you until you add value to their life whether it could be your social media audience, your teammate, etc.  From my perspective, this quote has a deep meaning so let us try to understand it in the next few paragraphs.`,
          category: 'non-technical',
          AppreanceNumber: '14',
        },
        {
          id: 2032022,
          backImage: Blog_2032022 ,
          date:'March-22',
          title: 'Bol Behen Chatbot',
          type: 'ArtificialIntelligence',
          desc:`TThe chatbot runs on AI and will help educate women about general and sexual well-being. According to News18, the chatbot will be available in both Hindi and English. "Bol Behen" will cover an array of topics, ranging from relationships, and sexuality, to reproductive health.`,
          category: 'technical',
          AppreanceNumber: '13',
        },

        {
          id: 1022022,
          backImage: Blog_1022022 ,
          date:'feb-22',
          title: 'Routine',
          type: 'Motivational',
          desc:`  Routine is a practice that can where you schedule your whole day and spend your time according to it whether it be doing something productive or just watching some web series in between. Routine is very important to keep account of your time. For going on a short date or a short trip if we plan very wisely then`,
          category: 'non-technical',
          AppreanceNumber: '12',
        },
        {
          id: 2022022,
          backImage: Blog_2022022 ,
          date:'feb-22',
          title: '5G Technology',
          type: 'technology',
          desc:` 5G is the fifth-generation wireless connectivity that would make digitalization more accessible for businesses, public services, and individual households to reap the benefits of IoT, industry 4.0, and the explosion of intelligent devices. The next generation of wireless connectivity, or 5G, acts as a catalyst that promotes the advancement of intelligent connectivity. `,
          category: 'technical',
          AppreanceNumber: '11',
        },
        {
          id: 1012022,
          backImage: Blog_1012022 ,
          date:'jan-22',
          title: 'Still Learning Always Learning',
          type: 'knowledge',
          desc:`  Knowledge means the theoretical or practical understanding of a subject. There is a big difference between knowledge and knowing. To know is like you know the sun rises in the east but to have the knowledge means to know that the sun rises in the east because the earth rotates from west to east. `,
          category: 'non-technical',
          AppreanceNumber: '10',
        },
        {
          id: 2012022,
          backImage: Blog_2012022 ,
          date:'jan-22',
          title: 'The Meta-Verse',
          type: 'metaverse',
          desc:` Metaverse is a virtual-reality space in which users can interact with a computer-generated environment and other users. A metaverse is a network of 3D virtual worlds focused on social connection. 3D spaces in the metaverse will let you socialize, learn, collaborate and play in ways that go beyond `,
          category: 'technical',
          AppreanceNumber: '9',
        },
        {
          id: 1122021,
          backImage: Blog_1122021 ,
          date:'Dec-21',
          title: 'A Common Man',
          type: 'lifestyle',
          desc:`  Is life sumptuous for a common man? NEVER. A common man can never gain whatever he needs. I’m talking about the Indian system. As most of my viewers belong to US and UK they might not be aware of this. Well, in India, a hard-working man has no worth while the smart working men are halfway up and halfway down. `,
          category: 'non-technical',
          AppreanceNumber: '8',
        },
        {
          id: 2122021,
          backImage: Blog_2122021 ,
          date:'Dec-21',
          title: 'Feature of Future',
          type: 'technology',
          desc:`In WhatsApp, users could send a voice message to another user, but they did not get a chance to listen to that voice message before sending it. However, this often led to the user sending the wrong voice message. With this in mind, WhatsApp has changed its feature and given a new feature to give `,
          category: 'technical',
          AppreanceNumber: '7',
        },
        {
          id: 1112021,
          backImage: Blog_1112021 ,
          date:'Nov-21',
          title: 'Stay Strong',
          type: 'Motivaional',
          desc:` We all have had a phase where we feel lonely and left out! This is one of the toughest parts of life, but eventually, we all get through it. We grow stronger. We grow out bigger than the problems we are facing. Some do this in days while some can take a few years. But this is required. `,
          category: 'non-technical',
          AppreanceNumber: '6',
        },
        {
          id: 2112021,
          backImage: Blog_2112021 ,
          date:'Nov-21',
          title: 'History of Web',
          type: 'internet',
          desc:`We are constantly connected to devices. These devices communicate with each other to make our lives easier. We've become so immersed in technology that we don't even notice that a simple smartwatch app is replacing heavier equipment to keep our health vitals in check. Web 3.0 is the next step in the web's growth `,
          category: 'non-technical',
          AppreanceNumber: '5',
        },
        {
          id: 1102021,
          backImage: Blog_1102021 ,
          date:'Oct-21',
          title: 'Wake Up Note',
          type: 'Motivational',
          desc:`We wake up to this evil world every morning and so we may appreciate ourselves and other people too. It takes lots of guts to survive in this world, I must say. Things are not as simple as they seem to be.To all those people who are living healthily, you all are amazing. If no one told you today how beautiful you are or `,
          category: 'non-technical',
          AppreanceNumber: '4',
        },
        {
          id: 2102021,
          backImage: Blog_2102021 ,
          date:'Oct-21',
          title: 'Blockchain',
          type: 'Techonology',
          desc:`Blockchain is the core technology used to create the cryptocurrencies, like bitcoin. As part of the 4th industrial revolution since the invention of steam engine, electricity, and information technology, blockchain technology has been applied in many areas such as finance, judiciary, and commerce. The current paper focused on its potential`,
          category: 'technical',
          AppreanceNumber: '3',
        },
        {
          id: 1092021,
          backImage: Blog_1092021 ,
          date:'Sept-21',
          title: 'Motivation comes from within',
          type: 'Motivational',
          desc:` Many times people think that motivation comes from reading inspirational stories, watching real-life inspired movies, hearing motivational speakers, etc. This may help you for a short period of time; like you have heard or watched something motivational, you feel inspired and when you are exhausted, you stop. But what I believe is that motivation comes from within.`,
          category: 'non-technical',
          AppreanceNumber: '2',
        },
        {
          id: 2092021,
          backImage: Blog_2092021 ,
          date:'Sept-21',
          title: 'Internet Of Things',
          type: 'InternetOfThings',
          desc:`As the word itself describes, the Internet of Things (IoT), is a technology that connects real-world objects or things to the Internet. These objects are controlled using a smartphone through the Internet. Various sensors are used for the detection of different factors.
          Sensors can sense the human presence, atmospheric pressure, soil state, human body status etc. Sensors are connected with a microcontroller centralized device that controls all the data sent sensors. Two famous microcontroller devices are Arduino and Raspberry Pi.`,
          category: 'non-technical',
          AppreanceNumber: '1',
        },


      ];
    return (
        <>

     <ScrollToTop />

        <div className="pt-32">
            <h1 className=" pb-4 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blogs</h1>
        </div>
        <div className="flex justify-evenly items-center mb-24 lg:mb-0 ">
            <button className="mt-20 bg-white shadow-lg shadow-gray-600 px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Technical</button>
            <button  className="mt-20 bg-white shadow-lg shadow-gray-600  px-6 py-3 text-xl border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium">Non Technical</button>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-5 gap-0 items-center mt-0 lg:px-10 md:px-12  scale-[1] lg:scale-[0.9]">

            <BlogCard data_blogcard={blogCards}/>
            {/* <Routes>
                <Route path='sept21_blog1' element={<Sept21_Blog1 />}></Route>
            </Routes> */}
        </div>


        </>
     );
}

export default Blogpage;