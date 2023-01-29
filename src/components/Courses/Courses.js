import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses)

    return (
        <div className='bg-slate-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                {courses.map(course => (
                    <Course
                        key={course.id}
                        course={course}
                    ></Course>
                ))}
            </div>
        </div>
    );
};

export default Courses;