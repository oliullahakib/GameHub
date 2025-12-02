import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { GrInstallOption } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import { Link, useLoaderData, useParams } from 'react-router';
import MyContainer from './MyContainer';
import ReviewCard from './ReviewCard';

const AppDetails = () => {
    const { id } = useParams();
    const allGames = useLoaderData();
    const singleGame = allGames.find(game => game.id === id)

    const { title, category, coverPhoto, description, developer, downloadLink, iconImage, ratings,reviews } = singleGame;
    return (
        <>
            <div className="hero ">
                <title>Game Hub - App Details</title>
                <div className="hero-content flex-col gap-8 lg:flex-row">
                    <img
                        src={coverPhoto}
                        className="md:max-w-xl max-h-[700px] rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
                        <p className='text-accent text-lg font-semibold'>{developer}</p>
                        <div className='flex gap-5 my-5'>
                            <img className='w-20 rounded-sm' src={iconImage} alt={title} />
                            {/* reviews */}
                            <div className='flex justify-center flex-col border-r border-base-200 px-3'>
                                <p className='flex items-center'>{ratings}<IoStarSharp /> </p>
                                <p className='text-accent text-sm'>reviews</p>
                            </div>
                            {/* category */}
                            <div className='flex justify-center flex-col px-3'>
                                <p className='flex items-center'>{category} </p>
                                <p className='text-accent text-sm'>Category</p>
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <Link to={downloadLink} className="btn px-5 btn-primary text-black">Install <GrInstallOption /></Link>
                            <button className="btn btn-warning text-black">WishList <FaHeart color='red' /></button>
                        </div>

                        <Link to={"/all-apps"} className='btn btn-secondary mt-5 text-black'>⬅ Go To All Apps</Link>
                    </div>
                </div>


            </div>
            <MyContainer className='my-5 px-5'>
                <h2 className='text-xl text-primary'>Description:</h2>
                <p className='text-accent'>
                    {description}
                </p>
            </MyContainer>

            <MyContainer className='my-5 px-5'>
                <h2 className='text-xl text-primary'>Reviews({reviews.length})</h2>
                <div className='grid gap-5 my-5'>
                    {reviews.map(review=><ReviewCard review={review} />)}
                </div>
            </MyContainer>
        </>
    );
};

export default AppDetails;