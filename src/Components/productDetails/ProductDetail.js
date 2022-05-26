
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [card, setCard] = useState(1);
    const [quantity, setQuantity] = useState(0);
    const [taka, setTaka] = useState(0);
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])

    const increase = () => {
        setCard(card + 1);
    }
    const decrease = () => {
        let number = card - 1;
        if (number < 1) {
            number = 1;
        }
        setCard(number);
    }
    const handleAddToCard = async (product, user) => {
        await setQuantity(card);
        await setTaka(card * product.price);
        console.log(user.email);
        const order = await {
            email: user.email,
            name: product.name,
            img: product.img,
            id: product._id,
            price: product.price,
            order_quantity: card,
            total_price: card * product.price
        }

        await axios.put('http://localhost:5000/my-products', order)
            .then(response => {
                console.log(response);
            })

        alert('successfully add to card your product and check the my order page !')

    }


    return (
        <div className=' bg-base-200 '>
            <div class="hero  ">
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
                        <div className='flex flex-col justify-start lg:flex-row '>
                            <p className='text-1xl font-bold'> <span onClick={decrease} className=' btn text-1xl '>-</span> <input className='text-center' type="number" value={card} name="" id="" /> <span onClick={increase} className='btn text-1xl '>+</span></p>
                            <button onClick={() => handleAddToCard(product, user)} class="btn btn-primary w-24 ml-10">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex justify-center'>

                <div className='shadow'>
                    <h3 className='text-center text-1xl'>cart</h3>
                    <div class="stats stats-vertical lg:stats-horizontal ">
                        <div class="stat">
                            <div class="stat-title">total Quantity</div>
                            <div class="stat-value">{quantity}</div>

                        </div>

                        <div class="stat">
                            <div class="stat-title">Total Tk:</div>
                            <div class="stat-value">{taka}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;