import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import GameCard from '../components/GameCard';
import MyContainer from '../components/MyContainer';
import { FaArrowRight } from 'react-icons/fa';
import NewsLetter from '../components/NewsLetter';
const Home = () => {
    const gameData = useLoaderData();
    const top_3app = gameData.sort((a, b) => b.ratings - a.ratings).slice(0, 3)
    console.log(top_3app)
    return (
        <div>
            <header >
                <Banner top_3app={top_3app} />
            </header>
            <main>
                <section className='popular-games '>
                    <MyContainer className=' my-5 relative px-3 lg:px-0'>
                        <h2 className='text-xl font-semibold my-8'>Popular Games</h2>
                        <div className="card-container grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {
                                top_3app.map(app => <GameCard app={app} />)
                            }
                        </div>
                        <div className='flex justify-center'>
                            <Link to={"/all-apps"} className='text-black w-12 h-12 rounded-full bg-white lg:absolute -right-6 top-60 flex justify-center items-center animate-bounce'>
                            <FaArrowRight />
                        </Link>
                        </div>
                    </MyContainer>
                </section>
               <section className='news-letter '>
                <NewsLetter/>
               </section>
            </main>
        </div>
    );
};

export default Home;