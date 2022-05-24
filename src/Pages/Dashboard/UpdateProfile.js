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

    const imageStorageKey = '65ba121eec3fcd4ef7e47dd2bb730502';

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
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        education: data.education,
                        
                    }
                    console.log(tools);
                    // send to your database 
                    fetch(`http://localhost:5000/profile/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(tools)
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

                }

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
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Tool Price with Piece"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Tool Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'availableQuantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order "
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumOrder", {
                            required: {
                                value: true,
                                message: 'minimumOrder is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Tool Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
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
                                value: true,
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