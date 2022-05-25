import React from 'react';
import pic from '../../Assets/Images/myPic.jpg'

const MyPortfolio = () => {
    return (
        <div className='w-3/4 mx-auto border-2 shadow-xl'>
            <div className='my-10 flex justify-between items-center shadow-xl p-4 mb-4'>
                <div className=''>
                    <h2 className='text-3xl mb-2 uppercase'>Junayet Hassan Tamim</h2>
                    <h3 className='text-2xl'>Jr. Web Developer</h3>
                    <h5 className='link-hover hover:text-orange-400 text-lg'>jhatmim27@gmail.com</h5>
                </div>
                <div className='avatar'>
                    <div className='w-24 rounded'>
                        <img className='' src={pic} alt="" />
                    </div>
                </div>
            </div>
            <div className='shadow-xl p-4 mb-4'>
                <h2 className='text-4xl text-center mb-4'>EDUCATION</h2>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>BSC</h2>
                    <h2> Computer Science and Engineering</h2>
                    <h2>Daffodil International University</h2>
                    <h2>Passing Year: 2021</h2>
                </div>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>HSC</h2>
                    <h2>Feni Govt. College</h2>
                    <h2>Passing Year: 2016</h2>
                </div>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>SSC</h2>
                    <h2>Chhagalnaiya Govt. Pilot High School</h2>
                    <h2>Passing Year: 2014</h2>
                </div>
            </div>
            <div className='shadow-xl p-4 mb-4'>
                <h2 className='text-4xl text-center mb-4'>TECHNOLOGIES & SKILLS</h2>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'> Web Development (Front-End)</h2>
                        <ul className='ml-4 mt-2'>
                        <li> HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>JS</li>
                        <li>React</li>
                        </ul>
                </div>
                    <div className='my-4 border-2 p-2 rounded'>
                        <h2 className='text-2xl font-bold'>  Web Development (Back-End)</h2>
                        <ul className='ml-4 mt-2'>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li><span className='font-bold'>Database:</span> MongoDB</li>
                        </ul>
                    </div>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>  CMS</h2>
                    <ul className='ml-4 mt-2'>
                        <li> WordPress Design</li>
                    </ul>
                </div>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>Programming Languages</h2>
                    <ul className='ml-4 mt-2'>
                        <li> C</li>
                        <li> JAVA</li>
                    </ul>
                </div>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'> Microsoft Office</h2>
                    <ul className='ml-4 mt-2'>
                        <li>MS Word</li>
                        <li>PowerPoint</li>
                        <li>Excel</li>
                    </ul>
                </div>
            </div>
            <div className='shadow-xl p-4'>
                <h2 className='text-4xl text-center mb-4'>SOME OF MY PROJECT</h2>
                <div className='my-4 border-2 p-2 rounded'>
                    <h2 className='text-2xl font-bold'>My Best Three Project</h2>
                    <ul className='ml-4 mt-2'>
                        <li><span className='font-bold'>Build Your Body:</span> <span className='link hover:text-orange-400'>https://build-your-body-e2805.web.app/</span> </li>
                        <li><span className='font-bold'>Fruits And Veg Mania:</span> <span className='link hover:text-orange-400'>https://fruits-and-veg-mania.web.app/</span> </li>
                        <li><span className='font-bold'>Reviews Mania:</span> <span className='link hover:text-orange-400'>https://reviews-mania.netlify.app/</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;