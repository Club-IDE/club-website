const Eventcard = (props) => {

    const event = props.events;
    return (
        <>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card lg:w-[25%] w-[90%] min-h-[550px] relative scale-[0.85] border-2 hover:scale-[0.90] event-shadow">
            <img
              src={event.thumbnail}
              className="object-contain w-full h-64 hover:object-cover transition-all duration-1000"
              alt=""
            />
            <div className="p-5 flex-col items-center content-evenly">
                <h2 className="text-2xl mt-3">{event.name}</h2>
                <p className="my-1 text-md">Date:  {event.date}</p>
                <a href='#' className="block my-1 text-md" target='_blank'>Event Description</a>
                {event.isCompleted && <a href = {event.Reportlink} target='_blank' className=" bg-white px-5 py-1 text-md border-2 border-secondary rounded-md my-1 hover:bg-secondary hover:text-white transition absolute bottom-5 left-[50%] -translate-x-[50%] ">Download Report</a>}
                {!event.isCompleted && <a href = {event.RegisterLink} target='_blank' className=" bg-white px-5 py-1 text-md border-2 border-secondary rounded-md my-1 hover:bg-secondary hover:text-white transition absolute bottom-5 left-[50%] -translate-x-[50%]">Register Now</a>}

            </div>
          </div>
        </>
     );
}

export default Eventcard;
