import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router';
import { motion } from "motion/react"

const GameCard = ({app}) => {
    const {title,category,iconImage,ratings,coverPhoto,_id} = app;
    return (
        <motion.button
        whileHover={{ scale: .9 }} 
        >
        <Link  to={`/app-details/${_id}`} className="card cursor-pointer bg-[#222831] border-b-2 border-primary pl-3">
            <figure>
                <img
                className='h-80 hidden md:inline w-full object-cover'
                    src={coverPhoto}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col  gap-5 my-5 px-1">
              <div className=''>
                  <img className='w-20 h-20 md:h-20 md:w-20 rounded-md ' src={iconImage} alt={'icon'} />
              </div>
                <div>
                    <h2 className="card-title text-sm sm:text-lg min-h-10">
                       {title}
                    </h2>
                    <div className='min-h-5'>
                        <div className="text-accent flex ">{category}</div>
                    </div>
                    <p className='flex items-center'>{ratings} <span><IoStarSharp /></span></p>
                </div>
            </div>
        </Link>
        </motion.button>

    );
};

export default GameCard;