import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import google from '../../Assets/picture/google.png'
import auth from '../../firebase.init';
const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (event) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        if (password.length >= 6) {
            createUserWithEmailAndPassword(email, password);
            window.alert('succesfull your registration');
        }
        else {
            window.alert('password must be more then 6 digit')
        }
        event.preventDefault();

    }





    return (

        <div class="card w-1/2 bg-base-100 shadow-xl mx-auto m-5">
            <div className=' mx-auto w-3/4 border-2 m-2 border-yellow-300'>
                <h1 className='text-5xl text-center'>Sign-Up</h1>

                <div class="flex flex-col w-full border-opacity-50">
                    <form onSubmit={handleRegister}>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text"> your name?</span>
                            </label>
                            <input ref={nameRef} type="text" placeholder="name" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text"> your name?</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text"> your password?</span>
                            </label>
                            <input ref={passwordRef} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='w-full max-w-xs mx-auto m-4'>
                            <input type="submit" value="submit" class=" btn w-full max-w-xs" />
                        </div>
                    </form>
                    <p className='text-center'>You Have an Account ? <span className='link text-yellow-400'><Link to='/login' >Log In</Link> </span>  </p>
                    <div class="divider">OR</div>
                    <div>
                        <div onClick={() => signInWithGoogle()} className=' btn flex  justify-center items-center p-1  mb-2 shadow-2xl mx-4 border cursor-pointer'>
                            <p className='pr-4' >sign-In with</p>
                            <img className='rounded-full w-8 h-8' src={google} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>





    );
};

export default SignUp;