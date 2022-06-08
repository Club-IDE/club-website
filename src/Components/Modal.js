import React from "react";

export default function SubmitModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="inline-flex w-full overflow-hidden shadow sm:w-auto sm:mx-2 mb-10">
        <button
          className="inline-flex items-center justify-center w-full px-10 py-3 rounded text-base button-site"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Submit
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-20" data-aos="zoom-in">
            <div className="relative my-6 mx-auto w-[90%] lg:w-[25%] md:w-[70%]">
              {/*content*/}
              <div className="rounded-[54px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center flex-col pt-5">
                  <h3 className="text-[30px] font-semibold center text-primary uppercase">Submit your Blog</h3>

                  <h2 className="center py-5 text-sm text-gray-400">Publish your passions, Inspire the members  </h2>
                </div>
                {/*body*/}
                <div className="mt-2 text-center">
                  <form action="" className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      className="border-2 bg-[#DBE2E2]  w-[80%] h-10 rounded-6 p-5 placeholder:font-semibold my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full"
                      placeholder="Name"
                      required = {true}
                    />
                    <input
                      type="email"
                      className="border-2 bg-[#DBE2E2]  w-[80%] h-10 rounded-6 p-5 placeholder:font-semibold my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full"
                      placeholder="Email"
                      required = {true}
                    />
                    <select className="border-2  w-[80%] h-10 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full" required={true}>
                      <option value="0">Branch</option>
                      <option value="1">CE</option>
                      <option value="2">IT</option>
                      <option value="3">BM</option>
                      <option value="4">EC</option>
                      <option value="5">IC</option>
                      <option value="6">CIVIL</option>
                      <option value="7">Other</option>
                    </select>
                    <select className="border-2  w-[80%] h-10 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full" required={true}>
                      <option value="0">Semester</option>
                      <option value="1">
                        1<sup>st</sup>
                      </option>
                      <option value="2">
                        2<sup>nd</sup>
                      </option>
                      <option value="3">
                        3<sup>rd</sup>
                      </option>
                      <option value="4">
                        4<sup>th</sup>
                      </option>
                      <option value="5">
                        5<sup>th</sup>
                      </option>
                      <option value="6">
                        6<sup>th</sup>
                      </option>
                      <option value="7">
                        7<sup>th</sup>
                      </option>
                      <option value="8">
                        8<sup>th</sup>
                      </option>
                    </select>
                    <input class="border-2 w-[80%] h-11 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full" id="formFileLg" type="file" required={true}/>
                    {/*footer*/}
                    <a href=""><span className=" text-blue-600">Click Here </span>to Show Basic Format of blog</a>
                    <div className="flex justify-between my-5">
                      <button
                        className="button-site uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                    <button
                      type="submit"
                      className="uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 button-site"

                    >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
