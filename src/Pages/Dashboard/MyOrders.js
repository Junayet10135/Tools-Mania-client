import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = ({data}) => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { isLoading, error, data: orders, refetch } = useQuery(['orders'], () =>
        fetch('http://localhost:5000/order')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const remaining = orders.filter(order => order.email === email);
    return (
        <div>
            <h2>My Orders: {remaining.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>tool</th>
                            <th>quantity</th>
                            <th>address</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remaining.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.tool}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;