import React from 'react';
import CountUp from 'react-countup';
import Summary from './Summary';
import banner from '../../Assets/Images/banner.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersLine , faEye , faFaceSmile } from '@fortawesome/free-solid-svg-icons'


const BusinessSummary = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div className='py-10'>
            <h2 className='text-3xl bg-secondary text-white p-2 text-center'>Business Section</h2>
            {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-10'>
                <Summary cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={banner}></Summary>
                <Summary cardTitle="Our Locations" bgClass="bg-green-500" img={banner}></Summary>
                <Summary cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={banner}></Summary>
            </div> */}
            <div className='m-10 text-center'>
                <h2 className='text-5xl font-bold uppercase'>Thanks For Visit</h2>
                <h3 className='text-3xl mt-4'>Here Some Stat Of Our Business</h3>
            </div>

            <div className="stats shadow w-full mt-10">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-center mb-4 text-4xl">Happy Clients</div>
                    <div className=" text-center text-6xl text-primary"><FontAwesomeIcon icon={faUsersLine} /></div>
                    <div >
                        <CountUp start={0} end={100} delay={1}>
                            {({ countUpRef }) => (
                                <div className='flex items-center justify-center m-2'>
                                    <span className=" stat-value text-primary text-center" ref={countUpRef} />
                                    <p className="stat-value text-primary">k+</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-center mb-4 text-4xl"> Page Views</div>
                    <div className=" text-center text-6xl text-purple-400"><FontAwesomeIcon icon={faEye} /></div>
                    <div>
                        <CountUp start={0} end={20} delay={1}>
                            {({ countUpRef }) => (
                                <div className='flex items-center justify-center m-2'>
                                    <span className="stat-value text-purple-300" ref={countUpRef} />
                                    <p className="stat-value text-purple-300">M+</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title text-center mb-4 text-4xl">Clients Satisfaction</div>
                    <div className=" text-center text-6xl text-lime-300"><FontAwesomeIcon icon={faFaceSmile } /></div>
                    <div>
                        <CountUp start={0} end={100} delay={1}>
                            {({ countUpRef }) => (
                                <div className='flex items-center justify-center m-2'>
                                    <span className="stat-value text-lime-300" ref={countUpRef} />
                                    <p className="stat-value text-lime-300">%</p>
                                </div>
                            )}
                        </CountUp>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;