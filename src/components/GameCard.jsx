import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router';
import { motion } from "motion/react"

const GameCard = ({app}) => {
    const {title,category,iconImage,ratings,coverPhoto,id} = app;
    return (
        <motion.button
        whileHover={{ scale: .9 }} 
        >
        <Link  to={`/app-details/${id}`} className="card cursor-pointer bg-[#222831] border-b-2 border-primary">
            <figure>
                <img
                className='h-80 w-full object-cover'
                    src={coverPhoto}
                    alt="Shoes" />
            </figure>
            <div className="flex gap-5 my-5 px-1">
                <img className='w-20 rounded-md sm:rounded-2xl' src={iconImage} alt={title} />
                <div>
                    <h2 className="card-title text-sm sm:text-lg">
                       {title}
                    </h2>
                    <div>
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