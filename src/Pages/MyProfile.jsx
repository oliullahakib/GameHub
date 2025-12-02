import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import Loading from './Loading';

const MyProfile = () => {
    const{user,loading}=use(AuthContext);
    if(loading)return <Loading/>
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <title>Game Hub - My Profile</title>
            <div className="card bg-[#08839520] min-w-82 lg:min-w-96 shadow-sm">
                <figure>
                    <img
                    referrerPolicy='no-referrer'
                        className='w-40 h-40 rounded-full mt-5'
                        src={user?.photoURL}
                        alt={user?.displayName} />
                </figure>
                <div className="flex flex-col items-center justify-center mt-3">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p className='text-accent'>{user?.email}</p>
                    <div className="card-actions justify-end">
                        <Link to={"/profile/update-profile"} className="btn border-none shadow-none my-5 bg-[#071952]">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;