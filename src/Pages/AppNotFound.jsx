import React from 'react';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
         <div className='flex justify-center items-center sm:items-start min-h-screen'>
            <div>
                <title>Game Hub - Error</title>
                <div className='flex justify-center'>
                    <img className='w-40 md:w-40 mb-8' src="https://icon-library.com/images/error-icon-png/error-icon-png-20.jpg" alt="" />
                </div>
                <h1 className='pb-5 text-3xl md:text-7xl text-accent font-semibold text-center '>Opss! <br /> App Not Found</h1>
               <div className='text-center'>
                 <Link className='btn btn-primary text-black' to={"/"}> ⬅ Go To Home</Link>
               </div>
            </div>
        </div>
    );
};

export default AppNotFound;