import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img className='w-1/2' src={product.img} alt='product' />
                <div >
                    <h1 class="text-5xl font-bold">{product.name}</h1>
                    <div className=' text-2xl '>
                        <p class="py-6">{product.description}</p>
                        <p>Minimum Order Quantity: {product.order_quantity} p</p>
                        <p>Total available Quantity:  {product.available_quantity} p</p>
                        <p>rate:{product.price}tk</p>
                    </div>
                    <button class="btn btn-primary">total pay</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;