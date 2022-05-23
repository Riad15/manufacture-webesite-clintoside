import React from 'react';

const ToolsCart = (props) => {
    const { _id, name, img, description, order_quantity, available_quantity, price } = props.parts;
    console.log(name);
    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body gap-0 py-0">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>price: <span className='text-2xl text-amber-500 '>{price}</span> </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ToolsCart;