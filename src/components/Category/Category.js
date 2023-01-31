import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='bg-gray-800 mr-5 p-3 sm:block'>
            <h4 className='my-5 font bold text-white text-2xl mr-3'>All Category: {categories.length}</h4>
            <hr />
            <div>
                {
                    categories.map(category => <p className='w-full font bold text-white text-2xl py-5' key={category.id}>
                        <Link className=' ' to={`../Courses/${category.id}`}>{category.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Category;