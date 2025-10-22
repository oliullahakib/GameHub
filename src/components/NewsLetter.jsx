import React from 'react';

const NewsLetter = () => {
    return (
        <div className=' flex flex-col justify-center items-center oswald-font bg-linear-to-l from from-[#99EE2D40] via-[#111111] to-[#2DEED740] py-10'>
            <h1 className='text-3xl sm:text-5xl font-bold my-5'>Join With Use</h1>
            <div className="join">
                <input className="input join-item text-accent" placeholder="example@gmail.com" />
                <button className="btn btn-primary join-item text-black ">Join</button>
            </div>
        </div>
    );
};

export default NewsLetter;