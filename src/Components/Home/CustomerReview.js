import React from 'react';
import useCustomer from '../../Hooks/useCustomer';
import CustomerReviewCart from './CustomerReviewCart';

const CustomerReview = () => {
    const [review] = useCustomer();
    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-4 mb-6'>Customer FeedBack's</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    review.map(data => <CustomerReviewCart
                        key={data._id}
                        reviews={data}
                    ></CustomerReviewCart>)
                }

            </div>
        </div>
    );
};

export default CustomerReview;