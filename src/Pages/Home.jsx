import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import GameCard from '../components/GameCard';
import MyContainer from '../components/MyContainer';
import { FaArrowRight } from 'react-icons/fa';
import NewsLetter from '../components/NewsLetter';
import Marquee from "react-fast-marquee"
const Home = () => {
    const gameData = useLoaderData();
    const top_3app = gameData.sort((a, b) => b.ratings - a.ratings).slice(0, 3)

    return (
        <div>
            <header >
                <Banner top_3app={top_3app} />
            </header>
            <main>
                <section className='popular-games '>
                    <MyContainer className=' my-10 relative px-3 lg:px-0'>
                        <h2 className='text-xl font-semibold my-5 pl-5'>Popular Games</h2>
                        <div className="card-container grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {
                                top_3app.map(app => <GameCard key={app.id} app={app} />)
                            }
                        </div>
                        <div className='flex justify-center'>
                            <Link to={"/all-apps"} className='text-black w-12 h-12 rounded-full bg-white lg:absolute -right-6 top-60 flex justify-center items-center animate-bounce'>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </MyContainer>
                </section>

                <section className='all-categories'>
                    <MyContainer className={'py-5 mb-8'}>
                     <h2 className='text-xl font-semibold text-center my-5 '>All Categories</h2>
                        <Marquee>
                            <img className='w-40 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzurvWebLFdQZyx1P9-EXcFM_Sm6gjWdlJTXkeUlYvIcKH00e4UdbBLhNmhQOkwXin1s&usqp=CAU" alt="" />
                            <img className='w-40 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8IjQTov3Gh1qFNZYj70Gdr4lqwycYoQKug&s" alt="" />
                            <img className='w-40 mx-10' src="https://www.shutterstock.com/image-vector/shot-gun-logo-260nw-708091039.jpg" alt="" />
                            <img className='w-40 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SGsOR0SY3WutmvIRRgys_--0U21mZJx2PQ&s" alt="" />
                            <img className='w-40 mx-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkL1Tx1Z9HZYiN4hrINU2pprpFu34MHyZQnA&s" alt="" />
                            
                        </Marquee>
                    </MyContainer>
                </section>

                <section className='news-letter '>
                    <MyContainer>
                        <NewsLetter />
                    </MyContainer>
                </section>
            </main>
        </div>
    );
};

export default Home;