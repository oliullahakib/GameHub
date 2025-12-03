import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from '../components/GameCard';
import MyContainer from '../components/MyContainer';


const AllApps = () => {
    const gameData = useLoaderData();
    return (
        <MyContainer >
            <title>Game Hub - All Apps</title>
           <h2 className='text-xl font-semibold my-8 pl-5'>All Games <span className='text-primary font-bold'>({gameData.length})</span> </h2>
           <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-3 mb-8'>
            {
                gameData.map(app=><GameCard key={app._id} app={app}/>)
            }
           </div>
        </MyContainer>
    );
};

export default AllApps;