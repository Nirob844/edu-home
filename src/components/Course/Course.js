import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    const { id, title, url } = course;

    return (
        <div className='dark:bg-gray-800 drop-shadow-2xl rounded-2xl'>
            <div className=''>
                <img className='h-60 w-full' src={url} alt="" />
            </div>
            <div className='mx-auto text-center'>
                <h1 className='text-2xl text-white font-bold my-4'>{title}</h1>
                <Link to={`../Courses/${id}`}>
                    <button className="mb-2 btn btn-active btn-primary">VIEW DETAILS</button>
                </Link>
            </div>

        </div>
    );
};

export default Course;