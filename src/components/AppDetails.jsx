import React from 'react';
import { GrInstallOption } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import { Link, useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const allGames = useLoaderData();
    const singleGame = allGames.find(game => game.id === id)

    const { title, category, coverPhoto, description, developer, downloadLink, iconImage, ratings } = singleGame;
    return (
        <>
            <div className="hero min-h-screen">
                 <title>Game Hub - {title}</title>
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
                        <Link to={downloadLink} className="btn px-5 btn-primary text-black">Install <GrInstallOption /></Link>
                        <div className='my-5'>
                            <h2 className='text-xl '>Description</h2>
                            <p className='text-accent'>
                                {description}
                            </p>
                        </div>
                         <Link to={"/all-apps"} className='btn btn-secondary text-black'>⬅ Go To All Apps</Link>
                    </div>
                </div>

           
            </div>
        </>
    );
};

export default AppDetails;