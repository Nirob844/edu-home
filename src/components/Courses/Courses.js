import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {

    const courses = useLoaderData();
    //console.log(courses)

    return (
        <div className='course-container bg-slate-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20'>
            <div>
                <Category></Category>
            </div>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2'>
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