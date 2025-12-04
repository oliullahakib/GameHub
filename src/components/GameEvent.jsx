import React from 'react';
import { Link } from 'react-router';

const GameEvent = () => {
    return (
        <div className='min-h-80 border my-15 bg-linear-to-bl from-[#A3D78A] to-blue-200 text-black rounded-2xl relative flex'>
            <img className='absolute -left-10 w-80 bottom-6 rotate-45' src="https://static.vecteezy.com/system/resources/thumbnails/046/542/142/small/gamer-controller-isolated-png.png" alt="" />
            <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='text-5xl font-bold '>We are <span className='text-[#3e7a3e]' >Offering</span> you the
                    <br />
                    
                    <span className='text-center text-'>Best <span className='text-orange-400'>Gaming</span> Exprience</span>
                     </h1>

                     <Link to={'/all-apps'} className='btn btn-primary text-black rounded-2xl animate-bounce mt-8'>Start Now</Link>
            </div>
             <img className='absolute -right-5 w-82 bottom-0 -rotate-45' src="https://static.vecteezy.com/system/resources/thumbnails/046/542/142/small/gamer-controller-isolated-png.png" alt="" />
        </div>
    );
};

export default GameEvent;