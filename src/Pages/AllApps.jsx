import React from 'react';
import { useLoaderData } from 'react-router';
import GameCard from '../components/GameCard';


const AllApps = () => {
    const gameData = useLoaderData();
    // console.log(gameData)
    return (
        <div >
            <title>Game Hub - All Apps</title>
           <h2 className='text-xl font-semibold my-8'>All Games({gameData.length})</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-3'>
            {
                gameData.map(app=><GameCard key={app.id} app={app}/>)
            }
           </div>
        </div>
    );
};

export default AllApps;