import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCart = (props) => {
    const { _id, name, img, description, order_quantity, available_quantity, price } = props.parts;
    const navigate = useNavigate();
    const buyProduct = (id) => {
        navigate(`/home/purchase/${id}`)
        console.log(id);
    }
    return (

        <div class="card w-96 bg-base-100 mb-4 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-72 h-60 ' src={img} alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-yellow-400">{name}</h2>
                <p className='font-bold'>{description}</p>
                <p>price: {price}</p>
                <div class="card-actions">
                    <button onClick={() => buyProduct(_id)} class="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ToolsCart;