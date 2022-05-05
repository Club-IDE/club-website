import React from 'react'
import 'flowbite';

export default function DropDown() {
    return (
        <>
            <div className='w-max m-auto'>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-secondary hover:bg-primary font-semibold rounded text-lg px-6 py-2.5 text-center inline-flex items-center mb-20 " type="button">Latest Isuue of IDE Insiders <svg className="w-4 h-4 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                <div id="dropdown" className="z-10 hidden bg-white divide-y  rounded shadow-lg w-72" data-popper-placement="bottom">

                </div>
            </div>


        </>

    )
}
