import React from 'react';

const Review = ({ tool }) => {
    const { name, description, ratings  } = tool;
    
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-left"><span className='text-lg font-bold mr-2 uppercase'>Name:</span> {name}</h2>
                <div className='text-left'>
                    <h3 className='my-2'><span className='font-bold text-xl'>Ratings:</span> {ratings}</h3>
                    <h4><span className='font-bold text-xl'>Description:</span> <small>{description}</small></h4>
                </div>
            </div>
        </div>
    );
};

export default Review;