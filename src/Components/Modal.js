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
            <div className="relative my-6 mx-auto w-[90%] lg:w-[30%] md:w-[70%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Submit</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mt-2 text-center">
                  <form action="" className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      className="border-2 bg-[#DBE2E2]  w-[70%] h-10 rounded-6 p-5 placeholder:font-semibold my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full"
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      className="border-2 bg-[#DBE2E2]  w-[70%] h-10 rounded-6 p-5 placeholder:font-semibold my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full"
                      placeholder="Email"
                    />
                    <select className="border-2  w-[70%] h-10 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full">
                      <option value="0">Branch</option>
                      <option value="1">CE</option>
                      <option value="2">IT</option>
                      <option value="3">BM</option>
                      <option value="4">EC</option>
                      <option value="5">IC</option>
                      <option value="6">CIVIL</option>
                      <option value="7">Other</option>
                    </select>
                    <select className="border-2  w-[70%] h-10 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full">
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
                    <select className="border-2 w-[70%] h-10 px-4 bg-[#DBE2E2] rounded-6 my-3 shadow-sm shadow-gray-500 font-semibold text-gray-600 rounded-full">
                      <option value="0">Domain</option>
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
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    submit
                  </button>
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
