import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import MyContainer from './MyContainer';

const Navbar = () => {
    const { logOutUser, user } = use(AuthContext);
    console.log(user)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Logout Successfully");
                navigate('/')
            })
            .catch(err => {
                toast.error(err)
            })
    }
    const links = <>
        <li> <NavLink className='font-semibold' to={"/"}>Home</NavLink></li>
        <li> <NavLink className='font-semibold' to={"/all-apps"}>All Apps</NavLink></li>
        
    </>
    return (

        <MyContainer className="navbar bg-[#1D232A] sticky top-0 z-10 justify-between rounded-full px-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-3 ">
                        {
                            links
                        }
                         
                    </ul>
                </div>
                <Link to={"/"} className=" cursor-pointer text-2xl oswald-font">Game<span className='text-primary font-bold'>Hub</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className='navbar-end'>
                <div className='flex flex-col lg:flex-row'>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user"
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <p className='text-xl text-center'>{user?.displayName || "Name"}</p>
                            <p className='text-gray-400 text-center'>{user?.email ||""}</p>
                            <Link to={'/profile'} className='font-bold btn btn-primary text-black rounded-full my-5'> Profile</Link>
                            {
                                user&&<button onClick={handleLogout} className='font-bold  btn text-black btn-error rounded-full'>Logout</button>
                            }
                            
                            
                        </ul>
                    </div>
                            :
                            <div className='flex flex-col lg:flex-row lg:ml-5'>
                                 <Link className="btn btn-primary text-black my-3 lg:my-0 lg:mx-3" to={"/login"}>Login</Link>
                                 <Link className="btn hidden lg:flex btn-secondary text-black" to={"/register"}>Register</Link>
                            </div>
                    }

                </div>
            </div>
        </MyContainer>

    );
};

export default Navbar;