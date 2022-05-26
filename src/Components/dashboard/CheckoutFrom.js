import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutFrom = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardEror] = useState('');
    const [clintSecret, setClintSecret] = useState('');
    const { total_price } = props.payment;
    console.log(total_price);
    useEffect(() => {
        const url = 'http://localhost:5000/create-payment-intent';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ total_price })
        })
            .then(res => res.json())
            .then(data => {
                console.log("clint secret : ", data);
                if (data?.clientSecret) {

                    setClintSecret(data.clientSecret)
                }
            })

    }, [total_price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardEror(error.message)
        } else {
            setCardEror('')
        }




    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-ghost px-4   p-2' disabled={!stripe || !clintSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-small text-red-600'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutFrom;