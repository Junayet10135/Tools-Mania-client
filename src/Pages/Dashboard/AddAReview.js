import React from 'react';

const AddAReview = () => {
    const handlePlaceOrder = event => {
        event.preventDefault();
        const addReview = {

            name: event.target.name.value,
            ratings: event.target.ratings.value,
            description: event.target.description.value,
        }
        fetch('https://nameless-citadel-30933.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

            event.target.reset();

    }
    return (
        <div className='w-full mx-auto card lg:max-w-lg bg-base-100 shadow-xl p-10 mt-20'>
            <h2 className='text-2xl my-4 text-center'>Add A Review</h2>
            <form onSubmit={handlePlaceOrder} >
                <label class="label">
                    <span className="label-text">Name</span>
                </label>
                <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text" name="name" placeholder='Name' required />
                <br />
                <label class="label">
                    <span className="label-text">Ratings</span>
                </label>
                <input className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text"  name="ratings" placeholder='Ratings' required  />
                <br />
                <label class="label">
                    <span className="label-text">Description</span>
                </label>
                <textarea className='w-100 mb-2 px-10 py-2 shadow-xl border' type="text"  name="description" placeholder='Description' required  />
                <br />
                <div className='text-center'>
                    <input className='btn btn-secondary' type="submit" value="Place" />
                </div>
            </form>
        </div>
    );
};

export default AddAReview;