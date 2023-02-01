import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const checkout = useLoaderData();
    //console.log(checkout)
    const { id, title, url, course_description, price } = checkout;
    const confirm = () => {
        toast.success('enroll successful')
    }

    return (
        <div className=' bg-gray-800 w-fit mx-auto my-20 p-20'>
            <div className='flex justify-center rounded-lg'>
                <div className=' mr-10'>
                    <p className='text-5xl my-3'>{checkout.title}</p>
                    <p className='mb-3'>${price}</p>
                    <button onClick={confirm} className="btn btn-active btn-primary">Enroll</button>
                </div>
                <div>
                    <img className='h-32' src={url} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Checkout;