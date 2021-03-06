import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(()=>{
        fetch('https://nameless-citadel-30933.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data => setTools(data));
    },[setTools]);
   

    return (
        <div className='my-10'>
            <h2 className='text-3xl bg-secondary rounded text-white p-2 text-center mb-10'>Tools  </h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.slice(0,6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;