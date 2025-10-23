import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyProfile = () => {
    const{user}=use(AuthContext);
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-[#08839520] min-w-82 lg:min-w-96 shadow-sm">
                <figure>
                    <img
                        className='w-40 h-40 rounded-full mt-5'
                        src={user.photoURL}
                        alt={user.displayName} />
                </figure>
                <div className="flex flex-col items-center justify-center mt-3">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p className='text-accent'>{user.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn border-none shadow-none my-5 bg-[#071952]">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;