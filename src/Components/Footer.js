import React from 'react'
import { Link } from 'react-router-dom'
import IDELogo from '../imgs/IDELogo.png'
import Linktree from '../imgs/Linktree.svg'

export default function Footer() {
    return (
        <>
            <div className=' bg-gradient-to-b from-secondary via-primary to-secondary '>
                <div className="flex flex-col m-auto sm:max-w-xl md:max-w-full py-3">

                    <a
                        href="/"
                        aria-label="View"
                        className="inline-block  rounded-full"
                    >

                        <img src={IDELogo} alt="" className='w-32 m-auto pb-4' />
                    </a>
                    <h2 className="font-sans mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none m-auto ">
                        Club IDE
                    </h2>
                    <p className="font-mono text-bold text-white md:text-lg sm:px-4 leading-3 tracking-widest m-auto">
                        Innovate | Devlop | Engage
                    </p>
                </div>


            <div className="text-white">

                <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                        <div className="md:max-w-md lg:col-span-2">

                            <div className="mt-4 lg:max-w-sm">
                                <p className="text-sm text-deep-purple-50 text-justify">
                                Club IDE is the new age student community, by the students and for the students all around the globe to collaborate, network, and grow together!.
                                </p>
                                <p className="mt-4 text-sm text-deep-purple-50 text-justify">
                                By joining a IDE , students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Club IDE provide bridge between campus to corporate
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Oraganization
                                </p>
                                <ul className="mt-2 space-y-2 flex flex-col justify-center">
                                    <li>
                                        <a
                                            href="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Domain
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <div

                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Web-devlopment
                                        </div>
                                    </li>
                                    <li>
                                        <div

                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Android
                                        </div>
                                    </li>
                                    <li>
                                        <div

                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            ML and AI
                                        </div>
                                    </li>
                                    <li>
                                        <div

                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            CP
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Community
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="/eventpage"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Event
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://drive.google.com/drive/folders/1eAwzHL8kSPs3T3Hhefveg8IZfvyuWXUq"
                                            target='_blank'
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            Newsletter
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold tracking-wide text-teal-accent-400">
                                    Reach Us At
                                </p>
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <a
                                            href="mailto:ideclub@gecg28.ac.in"
                                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                                        >
                                            ideclub@gecg28ac.ac.in
                                        </a>
                                    </li>
                                    <li>

                                            Follow us to get latest updates.

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                        <p className="text-sm text-gray-100 m-auto lg:m-0">
                            © Copyright 2022 CLUB IDE. All rights reserved.
                        </p>
                        <div className="m-auto flex items-center mt-4 space-x-4 sm:mt-0 lg:m-0">
                            <a
                                href="https://twitter.com/club_ide"
                                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400
                            " target='_blank'
                            >
                                <svg viewBox="0 0 24 24" fill="white" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/clubide"
                                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400" target='_blank'
                            >
                                <svg viewBox="0 0 30 30" fill="white" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="https://linktr.ee/clubide"
                                target='_blank'
                                className="h-6 w-6 mb-1"
                            >
                                <img src={Linktree} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}
