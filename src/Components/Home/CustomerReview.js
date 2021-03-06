import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomer from '../../Hooks/useCustomer';
import CustomerReviewCart from './CustomerReviewCart';

const CustomerReview = () => {
    const [review] = useCustomer();
    const navigate = useNavigate();
    const homeReview = review.slice(0, 3);

    const customerReview = () => {
        navigate('/all-review')
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-4 mb-6'>Customer FeedBack's</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    homeReview.map(data => <CustomerReviewCart
                        key={data._id}
                        reviews={data}
                    ></CustomerReviewCart>)
                }

            </div>
            <div className='flex justify-center m-4'>
                <button className='btn bg-[#808080] border-0' onClick={customerReview} >more review</button>
            </div>
        </div>
    );
};

export default CustomerReview;