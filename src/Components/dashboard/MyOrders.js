import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrderCart from './MyOrderCart';

const MyOrders = () => {
    const [myOrderProducts, setMyOrderProducts] = useState([]);
    const [user] = useAuthState(auth);
    const url = 'http://localhost:5000/my-products';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(user.email);
                console.log("data from:", data);
                const myOrders = data.filter(order => order.email === user.email);
                setMyOrderProducts(myOrders);
            })
    }, [])
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