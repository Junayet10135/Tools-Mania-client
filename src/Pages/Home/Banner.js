import React from 'react';
import banner from '../../Assets/Images/banner.jpg'

const Banner = () => {
    return (
        <div className=" min-h-screen bg-cover flex justify-between items-center" style={{
            backgroundImage: `url(${banner})`
        }}>
           <div>
               
           </div>
        </div>
    );
};

export default Banner;