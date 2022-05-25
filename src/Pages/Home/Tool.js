import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool}) => {
    const {_id, name, price, img, description, minimumOrder, availableQuantity}=tool;
    const navigate = useNavigate();

    const handlePurchaseId = id => {
        navigate(`/purchase/${id}`)

    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title text-xl uppercase">{name}</h2>
               <div className='text-left m-4'>
                    <p className='mt-2'><span className='text-lg font-bold mr-2'>Price:$</span>{price} per unit</p>
                    <p className='mt-2'><span className='text-lg font-bold mr-2'>Available Quantity:</span> {availableQuantity}</p>
                    <p className='mt-2'><span className='text-lg font-bold mr-2'>Minimum Order:</span> {minimumOrder}</p>
                    <p className='mt-2'><span className='text-lg font-bold mr-2'>Description:</span> <small>{description}</small></p>
               </div>
                <button onClick={() => handlePurchaseId(_id)} className='btn btn-primary'>purchase</button>
            </div>
        </div>
    );
};

export default Tool;