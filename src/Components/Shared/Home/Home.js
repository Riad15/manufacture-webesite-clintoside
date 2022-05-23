import React from 'react';
import useParts from '../../../Hooks/useParts';
import Banner from './Banner';
import Tools from './Tools';
import ToolsCart from './ToolsCart';

const Home = () => {
    const [parts] = useParts();
    const sortData = parts.slice(0, 3);

    return (
        <div>

            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {

                    sortData.map(data => <ToolsCart
                        key={data._id}
                        parts={data}

                    ></ToolsCart>)
                }
            </div>


        </div>
    );
};

export default Home;