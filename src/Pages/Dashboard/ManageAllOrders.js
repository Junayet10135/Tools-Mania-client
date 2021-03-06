import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = ({data}) => {
    const [delivered, setDelivered] = useState(false);
    const { isLoading, error, data: orders, refetch } = useQuery(['orders'], () =>
        fetch('https://nameless-citadel-30933.herokuapp.com/order')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeliverd =(id)=>{
        setDelivered(true);
    }
    return (
        <div>
            <h2 className='text-2xl my-4 text-center'>My Orders: {orders.length}</h2>
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
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.tool}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{
                                    <button class="btn btn-xs btn-success text-white">paid</button>
                                
                                }</td>
                                <td>{
                                    !delivered? 
                                        <button onClick={()=>handleDeliverd(order._id)} class="btn btn-xs btn-error text-white">delivery</button>
                                        :
                                        <button class="btn btn-xs btn-success text-white">delivered</button>
                                }</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;