import React, { use } from 'react';
import { FaHeart } from 'react-icons/fa';
import { GrInstallOption } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import MyContainer from './MyContainer';
import ReviewCard from './ReviewCard';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../hook/useAxiosSecure';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
   
    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const allGames = useLoaderData();
    const singleGame = allGames.find(game => game._id === id)

    const {_id, title, category, coverPhoto, description, developer, downloadLink, iconImage, ratings, reviews } = singleGame;
    const handleWishList = () => {
       
        if (!user) return navigate('/login')
            const email = user.email || user.displayName
            const newGame = {gameId:_id, title, category, iconImage, developer, downloadLink, ratings, reviews,email }
        axiosSecure.post('/wish-game', newGame)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success(`${title} added to Wish List`)
                }
                if(res.data.message){
                    toast.error(res.data.message)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }
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
                            <button  onClick={() => handleWishList()} className="btn btn-warning text-black">WishList <FaHeart color='red' /></button>
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
                    {reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
                </div>
            </MyContainer>
        </>
    );
};

export default AppDetails;