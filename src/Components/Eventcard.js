const Eventcard = (props) => {
    return ( 
        <>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card hover:drop-shadow-xl lg:w-[23%] w-[90%] mx-2 my-5">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0 text-center">
                <h2 className="text-3xl mt-3">Flutter Festival</h2>
                <p className="my-1 text-lg">Date:{props.date}</p>
                <p className="my-1 text-lg">Time:{props.Time}</p>
                <a href="#" className="block my-1 text-lg">Event Description</a>
                <button className=" bg-white px-4 py-1 text-md border-2 border-secondary rounded-md my-1">Register</button>
              
            </div>
          </div>
        </>
     );
}
 
export default Eventcard;