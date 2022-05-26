import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMyOrderProducts from '../../Hooks/useMyOrderProducts';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe('pk_test_51L3awGC1fXws200uIkR3qUHGAR4SFORvWscVQMCBGQKTfyTMfrnsHrEtNTIT58hSZP5PuhFWVfZkobXcwzyxofnb00c2feRePr');

const Payment = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/my-products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPayment(data);
            })

    }, [payment])


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mb-2">
                <div class="card-body">
                    <h2 class="card-title">{payment.name}</h2>
                    <p>price: {payment.price}</p>
                    <p>quantity: {payment.order_quantity}</p>
                    <p>You have to pay: {payment.total_price}</p>
                </div>
                <figure><img w-60 h-56 src={payment.img} alt="Shoes" /></figure>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom payment={payment} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;