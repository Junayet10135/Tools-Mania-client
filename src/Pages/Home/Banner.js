import React from 'react';
import banner from '../../Assets/Images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-lg rounded-lg " alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>   
                </div>
            </div>
        </div>
    );
};

export default Banner;