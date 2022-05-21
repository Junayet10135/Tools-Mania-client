import React from 'react';
import CountUp from 'react-countup';

const Summary = ({ img, bgClass }) => {
    return (
        <div className={`card w-50 bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img className='w-2/4' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white items-center text-center">
                <div>
                    <CountUp start={0} end={100} delay={1}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
};

export default Summary;