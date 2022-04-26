


const BlogList_Horizontal = () => {
    return (


          <div className=" lg:flex overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm blog-card hover:drop-shadow-xl lg:w-[95%] w-[90%] mx-2 my-10">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-72"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </span>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Visit the East
              </a>
              <p className="my-4 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat consequatur, voluptates laudantium recusandae inventore dolorem nam facere impedit amet quae ullam? Laudantium, adipisci consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more ➡️
              </a>
            </div>
          </div>


    );
  };


  export default BlogList_Horizontal;