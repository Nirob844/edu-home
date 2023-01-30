import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const { title, url, course_description, price, instructor_name, learnFeatures } = singleCourse

    return (
        <div className='flex'>
            <div className='text-gray-900 w-2/4 ml-10'>
                <h2 className='my-10  text-3xl'>{title}</h2>
                <p className='mb-5'>{course_description}</p>
                <h3 className='text-2xl mb-5 flex'><span className='mb-2'>Instructor :  _</span> <br /> <div>
                    {instructor_name} <br /> <p>Bsc In Csc</p>
                </div></h3>
                <div>
                    <p className='text-2xl mb-2'>What you will learn from this course</p>

                    <p className='mb-5'>{learnFeatures}</p>

                </div>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default CourseDetails;