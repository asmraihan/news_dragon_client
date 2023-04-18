import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data=> setCategories(data))
        .catch(error=> console.log(error))
    },[])
    
    // console.log(categories)
    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 mt-4'>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-secondary fw-semibold text-decoration-none'>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;