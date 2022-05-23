import React from 'react';

const Review = ({ tool }) => {
    const { name, description, ratings  } = tool;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title">Name: {name}</h2>
                <h3>Ratings: {ratings}</h3>
                <p>Description: <small>{description}</small></p>
            </div>
        </div>
    );
};

export default Review;