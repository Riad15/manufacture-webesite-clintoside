import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProdile = () => {
    const { email } = useParams();
    const addressRef = useRef('');
    const phoneRef = useRef('');
    const incomeRef = useRef('');
    const ageRef = useRef('');
    const updateInfo = (event) => {
        event.preventDefault();

        const currentUser = {
            email: email,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            income: incomeRef.current.value,
            age: ageRef.current.value,
        }
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })

        }

    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">

            <form onSubmit={updateInfo} className='card-body'>
                <input type="text" ref={addressRef} placeholder="address" class="input input-bordered w-full max-w-xs" />
                <input type="text" ref={phoneRef} placeholder="phone No:" class="input input-bordered w-full max-w-xs" />
                <input type="text" ref={incomeRef} placeholder="monthly income:" class="input input-bordered w-full max-w-xs" />
                <input type="text" ref={ageRef} placeholder="age" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="submit" class="btn bg-primary text-black w-full max-w-xs" />
            </form>

        </div>
    );
};

export default UpdateProdile;