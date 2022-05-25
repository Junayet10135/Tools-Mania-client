import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L1ZEQIi2Sy9MG3Q2fNKv5kabh8GIS0VtiDpv8q7HrgFeyyf487ZzkoPOJlbKMMHihuNcGqE5Sh8jfrO2wTP25i000OkhX8ddd');

const Payment = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/payment/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET'
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {user?.displayName}</p>
                <h2 class="card-title">Please Pay for <span className='text-orange-700'>{order?.tool}</span></h2>
                <p><span className='font-bold'>your quantity:</span> {order.quantity}</p>
                <p><span className='font-bold'>Please pay require amount</span></p>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;