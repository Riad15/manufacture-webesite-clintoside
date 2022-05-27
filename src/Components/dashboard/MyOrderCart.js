import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMyOrderProducts from '../../Hooks/useMyOrderProducts';

const MyOrderCart = (props) => {
    const { _id, img, name, price, order_quantity, total_price } = props.orders;
    const [myOrderProducts, setMyOrderProducts] = useMyOrderProducts();
    const navigate = useNavigate()


    const deleteItem = (id) => {
        const deleteItem = window.confirm('delete item from  card ?');
        if (deleteItem) {

            const url = `https://protected-waters-84927.herokuapp.com/my-products/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const reaming = myOrderProducts.filter(orderItem => orderItem._id !== id);
                    setMyOrderProducts(reaming);
                })
            console.log(id);

        }

    }

    const payOrderItem = (id) => {
        navigate(`/dashboard/payment/${id}`);

        console.log(id);

    }

    return (
        <tr>
            <th>
                <button onClick={() => deleteItem(_id)} className='btn btn-ghost  p-2 text-xl'>delete item</button>
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask  w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='text-xl'>total Order Quantity: {order_quantity} </p>
            </td>
            <td className='text-xl'>Total pay : {total_price}</td>
            <th>
                <button onClick={() => payOrderItem(_id)} class="btn btn-ghost p-2 text-xl">Pay</button>
            </th>
        </tr>
    );
};

export default MyOrderCart;