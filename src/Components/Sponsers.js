import GDSCLogo from '../imgs/GDSCLogo.png';
import CodeChefLogo from '../imgs/CodeChefLogo.png';

const Sponsers = () => {
    return ( 
        <>
        <div className="">
            <h2 className="text-center text-5xl font-bold">Our Sponsers</h2>
            <div className="h-72"></div>
            <h2 className="text-center text-3xl font-bold">We have been accociated with global communities like</h2>
            <div className='flex justify-center items-center xl:flex-row flex-col'>
            <img src={GDSCLogo} className="w-1/2"/>
            <img src={CodeChefLogo} className="w-1/3 h-1/3"/>
            </div>
        </div>
        </>
     );
}
 
export default Sponsers
