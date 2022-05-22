import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [product, setProduct] = useState({});
    const [isReload, setIsReload] = useState(true);
    const { name, price, img, description, minimumOrder, availableQuantity } = product;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [isReload, purchaseId]);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price} per unit</p>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order: {minimumOrder}</p>
                <p>Description: <small>{description}</small></p>
                
            </div>
        </div>
    );
};

export default Purchase;