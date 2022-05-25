import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MakeAdmin = ({data}) => {
    const [u] =useAuthState(auth);
    const { isLoading, error, data: users, refetch } = useQuery(['users'], () =>
        fetch('https://nameless-citadel-30933.herokuapp.com/user')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin =(email)=>{
        console.log(email);
        fetch(`https://nameless-citadel-30933.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            
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
            <h2 className='text-2xl my-4 text-center'>All Users: {users.length}</h2>
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
                                <td>{user?.role !== 'admin' && <button onClick={() => handleAdmin(user.email)} class="btn btn-xs btn-success text-white">Make Admin</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;