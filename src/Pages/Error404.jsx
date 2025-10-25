import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    return (
        <div className='flex justify-center items-center sm:items-start min-h-screen'>
            <div>
                <title>Game Hub - 404 Error</title>
                <div className='flex justify-center'>
                    <img className='w-82 md:w-96' src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-page-3d-icon-png-download-5701571.png" alt="" />
                </div>
                <h1 className='pb-5 text-3xl md:text-7xl text-accent font-semibold text-center '>Opss! <br /> Page Not Found</h1>
                <div className='text-center'>
                 <Link className='btn btn-primary text-black mb-8' to={"/"}> ⬅ Go To Home</Link>
               </div>
            </div>
        </div>
    );
};

export default Error404;