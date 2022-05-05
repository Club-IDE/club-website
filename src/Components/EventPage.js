import Eventcard from "./Eventcard";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import events from '../imgs/event.png'

const Eventpage = () => {
    return (
        <>
        <ScrollToTop />

        <div className="pt-32 ">
            <h1 className=" pb-4  text-6xl font-bold w-max m-auto text-primary">Events</h1>
        </div>
        <div className="flex justify-evenly items-center w-[100%] m-auto">
            <button className="mt-20 bg-gray-200 px-6 py-3 border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Upcoming Events</button>
            <button  className="mt-20 bg-gray-200 px-6 py-3  border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Past Events</button>
        </div>


        <div className="items-center lg:flex mt-16">

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-[50%] h-[50%] lg:max-w-2xl" src={events} alt="Catalogue-pana.svg"/>
                </div>


                    <div className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <p className="mt-6 lg:text-3xl text-center text-xl text-gray-500 leading-9">We're Wroking on event ideas<br />Stay Tuned </p>

                        </div>
                    </div>
        </div>


        <div className="pt-32 ">
            <h1 className=" pb-4  text-6xl font-bold w-max m-auto text-primary">Workshops</h1>
        </div>
        <div className="flex justify-evenly items-center w-[100%] m-auto">
            <button className="mt-20 bg-gray-200 px-6 py-3 border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Upcoming Workshop</button>
            <button  className="mt-20 bg-gray-200 px-6 py-3  border-l-4 border-secondary hover:drop-shadow-xl blog-buttons font-medium text-sm lg:text-xl">Past Workshop</button>
        </div>

        <div className="items-center lg:flex mt-16">

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-[50%] h-[50%] lg:max-w-2xl" src={events} alt="Catalogue-pana.svg"/>
                </div>


                    <div className="w-full lg:w-1/2">
                        <div className="mx-0 lg:max-w-lg lg:mx-20">
                            <p className="mt-6 lg:text-3xl text-center text-xl text-gray-500 leading-9">We're Wroking on event ideas<br />Stay Tuned </p>

                        </div>
                    </div>
        </div>



        </>
     );
}

export default Eventpage;