import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaRegUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { logOutUser, user } = use(AuthContext);
    console.log(user)
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Logout Successfully")
            })
            .catch(err => {
                toast.error(err)
            })
    }
    const links = <>
        <li> <NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/all-apps"}>All Apps</NavLink></li>
        <div className='flex flex-col lg:flex-row'>
            {
                user ?
                    <div className='flex lg:ml-5'>
                        <li> <button onClick={handleLogout} className="btn btn-error text-black" >Logout</button></li>
                        <Link to={"/profile"}> <img className='border border-white rounded-full w-12 h-12 mx-3 hidden lg:block' src={user?.photoURL?user?.photoURL:<FaRegUser />} alt="" /></Link>
                    </div>
                    :
                    <div className='flex ml-5'>
                        <li> <Link className="btn btn-primary text-black my-3 lg:my-0 lg:mx-3" to={"/login"}>Login</Link></li>
                        <li> <Link className="btn btn-secondary text-black" to={"/register"}>Register</Link></li>
                    </div>
            }

        </div>
    </>
    return (
        <div>
            <div className="navbar justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className=" cursor-pointer text-2xl oswald-font">Game<span className='text-primary font-bold'>Hub</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={"/profile"}> <img className='border border-white rounded-full w-12 h-12 mx-3  lg:hidden' src="https://img.icons8.com/color/48/businessman.png" alt="" /></Link>
            </div>
        </div>
    );
};

export default Navbar;