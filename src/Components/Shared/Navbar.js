import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SignUp from '../Login/SignUp';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div class="navbar bg-yellow-300">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-yellow-400">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/home' >Purchase</Link></li>
                        <li><Link to='/dashboard' >Dashboard</Link></li>
                        <li><Link to='/blog' >Blogs</Link></li>
                        <li><Link to='/login' >LogIn</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl" href='/'>Computer-Accessories</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/' >Home</Link></li>
                    {
                        user && <li><Link to='/dashboard' >Dashboard</Link></li>
                    }
                    <li><Link to='/blog' >Blogs</Link></li>
                    {
                        user ?
                            <li><Link onClick={() => logOut(auth)} to='/login' >LogOut</Link></li>

                            :
                            <li><Link to='/login' >LogIn</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;