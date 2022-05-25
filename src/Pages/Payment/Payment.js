import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET'
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
           <h2>Payment for : {order.tool}</h2>
        </div>
    );
};

export default Payment;