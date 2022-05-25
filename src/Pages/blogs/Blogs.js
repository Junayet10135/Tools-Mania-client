import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto shadow-xl mt-10'>
            <h2 className='text-2xl my-5 uppercase text-center font-bold'>Blogs</h2>
            <div className='border-2 shadow-xl p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    How will you improve the performance of a React Application?
                </h2>
                <p>
                    <ul>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </ul>
                </p>
            </div>
            <div className='border-2 shadow-xl mt-4 p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    What are the different ways to manage a state in a React application?
                </h2>
                <p>
                    There Are Many Ways to manage a state in a react application <br />
                    <span className='font-bold'>Some of them are ;</span>
                    <ul>
                        <li>Local state</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </ul>
                </p>
            </div>
            <div className='border-2 shadow-xl mt-4 p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    How does prototypical inheritance work?
                </h2>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods <br /> and properties in objects. It is a method by which an object can inherit the <br /> properties and methods of another object. <br /> Traditionally, in order to get and set the [[Prototype]] of an object, <br /> we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div className='border-2 shadow-xl mt-4 p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </h2>
                <p>
                    In useState first one is value or array ,but second one is function <br /> of first one,
                    if you set value in useState it will be default value but when you are in <br /> a big project you have to change data many time then using setProduct in most <br /> important for this , it help you tou work easily. 
                </p>
            </div>
            <div className='border-2 shadow-xl mt-4 p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <p>
                    If I have to find one object from this products array then i will use find method, <br />
                    <span className='font-bold'>example;</span> <br />
                    const remaining = products.find(product =('arrow') product.name === name); <br />
                    <br />
                    If I have to find every object which have that name from this products array then i will use filter method, <br />
                    <span className='font-bold'>example;</span> <br />
                    const remaining = products.filter(product =('arrow') product.name === name); <br />
                </p>
            </div>
            <div className='border-2 shadow-xl mt-4 p-2'>
                <h2 className='font-bold mb-3 text-xl'>
                    What is a unit test? Why should write unit tests?
                </h2>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
        </div>
    );
};

export default Blogs;