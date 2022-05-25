import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllProduct = ({data}) => {
    const { isLoading, error, data: tools, refetch } = useQuery(['tools'], () =>
        fetch('https://nameless-citadel-30933.herokuapp.com/tools')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-4 text-center'>All Tools: {tools.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Available quantity</th>
                            <th>Minimum Order</th>  
                            <th>DELETE</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div className='avatar'>
                                    <div className='w-8 rounded'>
                                        <img src={tool.img} alt="" />
                                    </div>
                                </div></td>
                                <td>{tool.name}</td>
                                <td>{tool.price}</td>
                                <td>{tool.availableQuantity}</td>
                                <td>{tool.minimumOrder}</td>
                                <td>
                                   <label class="btn btn-xs btn-error text-white modal-button">delete</label>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProduct;