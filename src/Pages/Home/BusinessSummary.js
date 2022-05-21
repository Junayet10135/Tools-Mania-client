import React from 'react';

import Summary from './Summary';
import banner from '../../Assets/Images/banner.jpg'

const BusinessSummary = () => {
    return (
        <div className='py-10'>
            <h2 className='text-3xl bg-teal-400 rounded text-white p-2 text-center'>Business Section</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-10'>
                <Summary cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={banner}></Summary>
                <Summary cardTitle="Our Locations" bgClass="bg-green-500" img={banner}></Summary>
                <Summary cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={banner}></Summary>
            </div>
        </div>
    );
};

export default BusinessSummary;