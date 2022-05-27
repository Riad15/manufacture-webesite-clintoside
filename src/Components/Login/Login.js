import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Assets/picture/google.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';

const Login = () => {
    // input ref
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // sign in with google
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    // sign in with email and password
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || guser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            alert("successfully Log-In")
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let errorMassage;



    if (loading || gloading) {
        return <Loading></Loading>
    }

    if (error || gerror) {
        errorMassage = <p className='text-red-500'><small>{error?.message || gerror?.message}</small></p>
    }


    const formSubmit = async (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        event.preventDefault();
    }
    return (
        <div className='w-1/3 mx-auto border-2 m-16 border-yellow-300'>
            <h1 className='text-5xl text-center m-2 pb-2'> Log-In</h1>

            <div class="flex flex-col w-full border-opacity-50">
                <form onSubmit={formSubmit}>
                    <div class="form-control m-2 w-full max-w-xs mx-auto">
                        <input ref={emailRef} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mx-auto">

                        <input ref={passwordRef} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    {errorMassage}
                    <div className='w-full max-w-xs mx-auto m-4'>
                        <input type="submit" value="submit" class=" btn w-full max-w-xs" />
                    </div>
                </form>

                <p className='text-center'>new member ? <span className='link text-yellow-400'><Link to='/register' >Register</Link> </span> </p>
                <div class="divider">OR</div>
                <div>
                    <div onClick={() => signInWithGoogle()} className=' btn flex  justify-center items-center p-1  mb-2 shadow-2xl mx-4 border cursor-pointer'>
                        <p className='pr-4' >sign-In with</p>
                        <img className='rounded-full w-8 h-8' src={google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;