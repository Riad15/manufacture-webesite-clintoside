
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [info, setInfo] = useState({})
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        const url = `https://protected-waters-84927.herokuapp.com/users/${email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setInfo(data);
            })

    }, [user])

    const updateProfile = (email) => {
        navigate(`/dashboard/myupdate-profile/${email}`)

    }
    return (
        <div >
            <h2 className='text-2xl font-medium'>My Profile</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> name: {info.name}</h2>
                    <p>email: {info.email}</p>
                    {
                        info.address && <p>address: {info.address}</p>
                    }
                    {
                        info.phone && <p>phone No: {info.phone}</p>
                    }
                    {
                        info.income && <p>income: {info.income}</p>
                    }
                    {
                        info.age && <p>age: {info.age}</p>
                    }
                    <div class="card-actions justify-end">
                        <button onClick={() => updateProfile(info.email)} class="btn btn-primary">update profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;