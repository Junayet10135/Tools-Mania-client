import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://nameless-citadel-30933.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [setTools]);
    return (
        <div className='my-10'>
            <h2 className='text-3xl bg-secondary rounded text-white p-2 text-center mb-10'>Reviews </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Review
                        key={tool._id}
                        tool={tool}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;