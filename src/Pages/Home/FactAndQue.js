import React from 'react';

const FactAndQue = () => {
    return (
        <div>
            <h2 className='text-3xl bg-secondary rounded text-white p-2 text-center mb-10'> F&Q  </h2>
            <div tabIndex={0} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Why Us?
                </div>
                <div class="collapse-content">
                    <p>We Provide You the best QualityFull Product in town, you can compare with others , and we give you product minimal price then others also return option will be available</p>
                </div>
            </div>
            <div tabIndex={0} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Our Products and policy
                </div>
                <div class="collapse-content">
                    <p>We provide Best tools for repaire computer , if we don't have that product you can give us your requirement we will try our best to give you your require items , thats why we give you a contact form for contact with us, we want to make network , we want to provide best products and want customers satisfaction </p>
                </div>
            </div>
        </div>
    );
};

export default FactAndQue;