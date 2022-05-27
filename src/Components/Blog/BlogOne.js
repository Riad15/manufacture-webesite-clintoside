import React from 'react';

const BlogOne = () => {
    return (
        <div className='mb-4'>
            <h1 className='text-lg font-semibold'>Q. How will you improve the performance of a React Application?</h1>
            <div>
                <p>
                    Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.
                </p>
                <div className='flex justify-center'>
                    <ul className='text-center text-justify'>
                        <li className='font-bold'>Use the Production Build</li>
                        <li className='font-bold'>Create React App</li>
                        <li className='font-bold'>Single-File Builds</li>
                        <li className='font-bold'>Brunch</li>
                        <li className='font-bold'>Browserify</li>
                        <li className='font-bold'>Profiling Components with the DevTools Profiler</li>
                        <li className='font-bold'>Brunch</li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default BlogOne;