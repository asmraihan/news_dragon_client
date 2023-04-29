import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae sunt accusamus laboriosam amet sint qui architecto est in modi quos.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;