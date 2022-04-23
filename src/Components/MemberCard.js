import React from 'react';
import demo from '../demo.jpg';
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import '../index.css'



function MemberCard(props) {
    return (
        
            <div class="lg:w-[21%] md:w-[34%] lg:mb-7 mb-6 p-4 bg-[#160539] mt-4 rounded-[25px] mx-auto border-b-8 border-[#A79AE0] w-[55%] hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] member-card">
                <div class="h-full text-center">
                    <img alt="" class="lg:w-32 w-28 h-28 lg:h-32 mb-4 object-cover object-center rounded-full inline-block border-4 border-[#A79AE0] mt-3 p-1" src={demo} />
                    <h1 className="text-white lg:text-3xl text-2xl">{props.name}</h1>
                    <h2 className="text-[#A79AE0] lg:text-2xl text-xl my-1">{props.role}</h2>
                    <p class="leading-relaxed text-white mt-3 lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in nunc mi. Morbi sem dui.</p>
                    <span class="inline-block text-white lg:text-[1rem] text-[0.8rem] lg:py-2 py-1 px-3 rounded-lg  bg-[#9082EC] lg:mt-6 lg:mb-4 mt-3 mb-2 outline outline-offset-2 outline-2 outline-[#A79AE0]">johndoe0101@gmail.com</span>
                    
                    <div className='flex justify-center mt-3'>
                        <FaTwitter color='white'   className='team-card_icon transition-all lg:text-4xl text-2xl'  />
                        <FaLinkedinIn color='white'  className='lg:mx-9 mx-7 team-card_icon lg:text-4xl text-2xl' />
                        <FaGithub color='white'  className='team-card_icon lg:text-4xl text-2xl'/>
                    </div>
                </div>
            </div>
        

    );
}
 
export default MemberCard;