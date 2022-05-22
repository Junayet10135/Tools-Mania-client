import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool}) => {
    const {_id, name, price, img, description, minimumOrder, availableQuantity}=tool;
    const navigate = useNavigate();

    const handlepurchaseId = id => {
        navigate(`/purchase/${id}`)

    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price} per unit</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order: {minimumOrder}</p>
                <p>Description: <small>{description}</small></p>
                <button onClick={() => handlepurchaseId(_id)} className='btn btn-primary'>purchase</button>
            </div>
        </div>
    );
};

export default Tool;