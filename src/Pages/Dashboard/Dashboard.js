import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-lime-400'> Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    { <>
                        <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage All Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;