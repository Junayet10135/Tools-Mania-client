import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MakeAdmin = ({data}) => {
    const [u] =useAuthState(auth);
    const { isLoading, error, data: users, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/user')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin =()=>{

        fetch(`http://localhost:5000/user/admin/${u.email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            refetch();
            toast.success('made Admin Successfully')
        })
    }
    return (
        <div>
            <h2>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={handleAdmin} class="btn btn-xs btn-success text-white">Make Admin</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;