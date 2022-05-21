import React from 'react';

const Tool = ({ tool}) => {
    const { name, price, img, description, minimumOrder, availableQuantity}=tool;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price} per unit</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Mini,um Order: {minimumOrder}</p>
                <p>Description: <small>{description}</small></p>
                <button className='btn btn-primary'>purchase</button>
            </div>
        </div>
    );
};

export default Tool;