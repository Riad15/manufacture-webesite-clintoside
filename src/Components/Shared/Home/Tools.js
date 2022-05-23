import React from 'react';
import useParts from '../../../Hooks/useParts';
import ToolsCart from './ToolsCart';

const Tools = () => {
    const [parts] = useParts();
    console.log(parts);
    return (
        <div>
            {
                parts.map(data => <ToolsCart
                    key={data._id}
                    parts={parts}

                ></ToolsCart>)
            }

        </div>
    );
};

export default Tools;