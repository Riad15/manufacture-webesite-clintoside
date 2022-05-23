import React from 'react';
import useParts from '../../Hooks/useParts';
import Footer from '../Shared/Footer';
import ToolsCart from './ToolsCart';

const Tools = () => {
    const [parts] = useParts();
    console.log(parts);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10 mb-4 '>
                {
                    parts.map(data => <ToolsCart
                        key={data._id}
                        parts={data}

                    ></ToolsCart>)
                }

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Tools;