import React from 'react';
import banner from '../../Assets/Images/banner.jpg'
import bg from '../../Assets/Images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-lg rounded-lg " alt='' />
                <div>
                    <h1 className="text-5xl font-bold"> Here Common Tools Useful for Working With Computers</h1>
                     
                </div>
            </div>
        </div>
    );
};

export default Banner;