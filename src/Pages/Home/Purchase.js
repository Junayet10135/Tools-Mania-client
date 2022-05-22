import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [product, setProduct] = useState({});
    const [isReload, setIsReload] = useState(true);
    const { name, price, img, description, minimumOrder, availableQuantity } = product;



    useEffect(() => {
        const url = `http://localhost:5000/tools/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIsReload(true)
            });
    }, [isReload, purchaseId]);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        setIsReload(false);
        const order = {
            
            email: user.email,
            service: user.name,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        const restAvailableQuantity =availableQuantity - order.quantity;

        fetch('http://localhost:5000/order',  {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            fetch(`http://localhost:5000/tools/${purchaseId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({restAvailableQuantity})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(false);
            })
                
        })
        
    }
    return (
        // <div className='hero min-h-screen'>
        //     <div className="card lg:max-w-lg bg-base-100 shadow-xl my-20 hero-content">
        //         <figure className="px-10 pt-10">
        //             <img src={img} alt="Shoes" className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-left">
        //             <h2 className="card-title">{name}</h2>
        //             <p>Price:${price} per unit</p>
        //             <p>Available Quantity: {availableQuantity}</p>
        //             <p>Minimum Order: {minimumOrder}</p>
        //             <p>Description: <small>{description}</small></p>
        //             <button className='btn btn-primary'>purchase</button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-20 hero-content">
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
                <div className='w-full mx-auto card lg:max-w-lg bg-base-100 shadow-xl p-10'>
                    <h2>Order For {name}</h2>
                    <form onSubmit={handlePlaceOrder}>
                        <label class="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                        <br />
                        <label class="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                        <br />
                        <label class="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text" name="quantity" placeholder='quantity' />
                        <br />
                        <label class="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text" name="address" placeholder='address' autoComplete='off' required />
                        <br />
                        <label class="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text" name="phone" placeholder='phone' />
                        <br />
                        <div className='text-center'>
                            <input className='btn btn-primary' type="submit" value="Place Order" />
                        </div>
                    </form>
                </div>
        </div>
        </div>
    );
};

export default Purchase;