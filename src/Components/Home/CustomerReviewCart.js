import React from 'react';

const CustomerReviewCart = (props) => {
    const { name, img, comment, star } = props.reviews;

    return (
        <div class="card w-96 bg-le bg-[#808080] text-primary-content lg:ml-8 mb-4">
            <div class="card-body">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <h2 class="card-title text-3xl">{name}</h2>
                    <p>{comment}</p>
                    <p> ratting: {star}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewCart;