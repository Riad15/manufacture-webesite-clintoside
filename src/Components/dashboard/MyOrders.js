import React from 'react';
import useMyOrderProducts from '../../Hooks/useMyOrderProducts';
import MyOrderCart from './MyOrderCart';

const MyOrders = () => {
    const [myOrderProducts] = useMyOrderProducts();

    return (
        <div>
            <h1 className='text-3xl font-bold text-yellow-300 mb-2'>My orders</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Quantity</th>
                            <th>Total Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrderProducts.map(orders => <MyOrderCart
                                key={orders._id}
                                orders={orders}
                            ></MyOrderCart>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;