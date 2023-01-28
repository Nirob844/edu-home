import React from 'react';
import banner from '../../assets/images/vladgrin190200077.webp'
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-slate-100">
                <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <h1 className="inline-block px-3 py-px mb-4 text-3xl font-bold tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
                                    Web Development Online Full Course
                                </h1>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl  tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Learn web development
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Explore our growing collection of courses on key web design and development subjects. An industry expert has written each course, helped by members of the Chrome team. Follow the modules sequentially, or dip into the topics you most want to learn about.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Apply Now
                            </a>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                        src={banner}
                        alt=""
                    // https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260
                    />
                </div>
            </div>
            <div>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;