import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import avatar from '../../Assets/Images/avatar.jpg'
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    const email = user?.email;
    const navigate = useNavigate();
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${email}`)
            .then(res => res.json())
            .then(data => {
                setProfiles(data);
                console.log(data);
            })
    }, [email])


    // const { isLoading, error, data: profiles, refetch } = useQuery(['profiles'], () =>
    //     fetch(`http://localhost:5000/profile/${email}`
    //     )
    //         .then(res => res.json())
    // )



    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const handleUpdate = () => {
        navigate('/dashboard/updateProfile')
    }

    return (
        <div>
            <div className='flex justify-between my-5 p-5 shadow-xl rounded-md'>
                <div>
                    <h2 className='text-3xl'><span className='text-4xl font-bold uppercase'>Name: </span> {user?.displayName}</h2>
                    <h2 className='text-3xl'> <span className='text-4xl font-bold uppercase'>Email:  </span>{user?.email}</h2>
                </div>
                <div className='avatar online'>
                    <div className='w-24 rounded-full'>
                        <img src={profiles?.image ?
                            profiles.img :
                            user?.photoURL ?
                                user.photoURL
                                :
                                avatar
                        } alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl shadow-xl p-4 my-4'><span className='font-bold uppercase'>Education: </span> {profiles?.education ? profiles.education : 'no value'}</h2>
                <h2 className='text-2xl shadow-xl p-4 my-4'><span className='font-bold uppercase'>location:</span> {profiles?.location ? profiles.location : 'no value'}</h2>
                <h2 className='text-2xl shadow-xl p-4 my-4'><span className='font-bold uppercase'>LinkedIn Link:</span> {profiles?.linkedIn ? profiles.linkedIn : 'no value'}</h2>
                <h2 className='text-2xl shadow-xl p-4 my-4'><span className='font-bold uppercase'>number:</span> {profiles?.number ? profiles.number : 'no value'}</h2>


            </div>
            <button className='mt-4' onClick={handleUpdate} class="btn btn-sm btn-success text-white">update Info</button>
        </div>
    );
};

export default MyProfile;