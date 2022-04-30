import GDSCLogo from '../imgs/GDSCLogo.png';
import CodeChefLogo from '../imgs/CodeChefLogo.png';
import aos from 'aos';
import { useEffect } from 'react';

const Sponsers = () => {

    useEffect(() => {
        aos.init({duration : 1000});
    
      }, [])

    return ( 
        <>
        <div className="">
            <h2 className="text-center lg:text-5xl text-2xl  font-bold">Our Sponsers</h2>
            <div className="h-72"></div>
            <h2 className="text-center lg:text-3xl text-lg font-bold">We have been accociated with global communities like</h2>
            <div className='flex justify-center items-center xl:flex-row flex-col'>
            <img data-aos="fade-left" src={GDSCLogo} className="w-1/2"/>
            <img data-aos="fade-right" src={CodeChefLogo} className="w-1/3 h-1/3"/>
            </div>
        </div>
        </>
     );
}
 
export default Sponsers
