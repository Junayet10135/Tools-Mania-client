import React from 'react';

const FactAndQue = () => {
    return (
        <div>
            <h2 className='text-3xl bg-teal-400 rounded text-white p-2 text-center mb-10'>There is F&Q Section </h2>
            <div tabIndex={0} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default FactAndQue;