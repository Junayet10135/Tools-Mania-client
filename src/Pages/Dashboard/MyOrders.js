import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = ({data}) => {
    const [user] = useAuthState(auth);
    const email = user?.email;
     const [orders, setOrders] = useState([]);
    const [isReload, setIsReload] = useState(true);
    const navigate = useNavigate();
    // const { isLoading, error, data: orders, refetch } = useQuery(['orders'], () =>
    //     fetch(`http://localhost:5000/order/${email}`, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }
    //     )
    //         .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    useEffect(()=>{
        fetch(`http://localhost:5000/order/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsReload(true)
            })
    }, [isReload,email])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(` deleted.`)
                }
            })
    }

   // const remaining = orders.filter(order => order.email === email);

    return (
        <div>
            <h2>My Orders: {orders?.length}</h2>
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
                            <th>Action</th>
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
                                <td><Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs btn-success text-white">pay</button></Link>
                                </td>
                                <td> <label for="my-modal" class="btn btn-xs btn-error text-white modal-button">delete</label>
                                </td>
                                <input type="checkbox" id="my-modal" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure you want to delete {order.tool}!</h3>
                                        <div class="modal-action">
                                            <button onClick={() => handleDelete(order._id)} class="btn btn-xs btn-error">Delete</button>
                                            <label for="my-modal" class="btn btn-xs">Cancel</label>
                                        </div>
                                    </div>
                                </div>
                                </tr>)
                        }


                    </tbody>
                </table>
                
            </div>
            
        </div>
    );
};

export default MyOrders;