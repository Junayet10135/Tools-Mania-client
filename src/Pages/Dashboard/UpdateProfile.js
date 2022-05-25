import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const imageStorageKey = '4017139c462dc0e353a80d0a87f24a1c';

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imbb',result);
                
                    const img = result?.data?.url;
                    const profile = {
                        education: data.education,
                        location:data.location,
                        number:data.pNumber,
                        linkedIn:data.linkedIn,
                        img:img
                    }
                    console.log(profile);
                    // send to your database 
                    fetch(`https://nameless-citadel-30933.herokuapp.com/profile/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('profile update successfully')
                                navigate('/dashboard')
                                data.reset();
                            }
                            else {
                                toast.error('Failed to profile update');
                            }
                        })

                

            })
        }
    return (
        <div className='card-body'>
            <h2 className='text-2xl'>Update Your Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'location is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Phone Number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("pNumber", {
                            required: {
                                value: true,
                                message: 'number is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile</span>
                    </label>
                    <input
                        type="text"
                        placeholder="LinkedIn Profile "
                        className="input input-bordered w-full max-w-xs"
                        {...register("linkedIn", {
                            required: {
                                value: true,
                                message: 'linkedIn is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="IMAGE"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: false,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateProfile;