import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
           <Navbar/>
           <div className='flex-1'>
            <Outlet></Outlet>
           </div>
           <Footer/>
        </div>
    );
};

export default Root;