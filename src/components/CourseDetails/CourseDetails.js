import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const { title, url, course_description, price, enrolledStudent, mainFeatures, hoursRequired, instructor_name, learnFeatures } = singleCourse

    return (

        <div className='my-1 w-11/12 mx-auto'>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse text-gray-100">
                <div className='dark:bg-gray-500'>
                    <img src={url} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <p className='grid justify-items-end mr-5'>${price}</p>
                    <div className='mx-auto flex justify-center my-3'>
                        <button className="btn btn-active btn-primary mr-2">PREMIUM ACCESS</button>
                        <button className="btn btn-warning">DETAILS PDF</button>
                    </div>
                    <hr />
                    <div className='mx-auto flex justify-center my-3 font-bold'>
                        <p className='mr-3'>Enrolled : {enrolledStudent}</p>
                        <p>HoursRequired : {hoursRequired} h</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-700">
                    <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="my-6 dark:text-gray-400">{course_description}</p>
                    <h3 className='my-5'>Instructor : {instructor_name}</h3>
                    <div className='mb-5'>
                        <p className='font-bold text-2xl'>What you will learn from this course</p>
                        <p className='mt-3'>{learnFeatures}</p>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <p>{mainFeatures}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CourseDetails;