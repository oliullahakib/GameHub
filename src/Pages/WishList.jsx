import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useAxiosSecure from '../hook/useAxiosSecure';
import MyContainer from '../components/MyContainer';
import WishGameCard from '../components/WishGameCard';

const WishList = () => {
    const{user}=use(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:games = [],refetch}=useQuery({
        queryKey:['games',user.email,user.displayName],
        queryFn:async()=>{
         const res =await axiosSecure.get(`/wish-games?email=${user.email}`)
            return res.data
        }
    })
    return (
        <MyContainer>
             <h2></h2>
             <h2 className='text-xl font-semibold my-5 pl-5'>WishList <span className='text-primary'>({games.length})</span></h2>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-3 mb-8'>
            {
                games.map(app=><WishGameCard refetch={refetch} key={app._id} app={app}/>)
            }
           </div>
        </MyContainer>
    );
};

export default WishList;