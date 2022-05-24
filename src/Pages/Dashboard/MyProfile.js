import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import avatar from '../../Assets/Images/avatar.jpg'
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const navigate = useNavigate();
    console.log(user);


    const { isLoading, error, data: profiles, refetch } = useQuery(['profiles'], () =>
        fetch(`http://localhost:5000/profile/${email}`
        )
            .then(res => res.json())
    )
    refetch();


    if (isLoading) {
        return <Loading></Loading>
    }

    const handleUpdate = () => {
        navigate('/dashboard/updateProfile')
    }

    return (
        <div>
            <div className='flex justify-between my-5 p-5 bg-lime-300 rounded-md'>
                <div>
                    <h2 className='text-3xl'><span className='text-4xl'>Name: </span> {user?.displayName}</h2>
                    <h2 className='text-3xl'> <span className='text-4xl'>Email:  </span>{user?.email}</h2>
                </div>
                <div className='avatar online'>
                    <div className='w-24 rounded-full'>
                        <img src={
                            user?.photoURL ?
                                user.photoURL
                                :
                                avatar
                        } alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2>Education: {profiles?.education ? profiles.education : 'no value'}</h2>
            </div>
            <button onClick={handleUpdate} class="btn btn-sm btn-success text-white">update</button>
        </div>
    );
};

export default MyProfile;