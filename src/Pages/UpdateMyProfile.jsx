import React, { use } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateMyProfile = () => {
    const { updateUser, user,setLoading } = use(AuthContext);
    const navigate = useNavigate();
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        // update user 
        updateUser(user, { displayName, photoURL })
            .then(() => {
                toast.success("Update User Successfully");
                setLoading(false);
                navigate("/profile");
            }).catch((error) => {
                toast.error(error)
            });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <title>Game Hub - My Profile</title>
            <div className="card bg-[#08839520] min-w-82 lg:min-w-96 shadow-sm p-5 space-y-2">
                <form onSubmit={handleUpdateUser} className='flex flex-col' >
                    {/* Name  */}
                    <label className="label">Name</label>
                    <input required name='name' type="text" className="input w-full" placeholder="Name" />
                    <p className='text-red-400'>{ }</p>
                    {/* Photo URL  */}
                    <label className="label"> Photo URL </label>
                    <input required name='photo' type="text" className="input w-full" placeholder=" Photo URL " />
                    <div className='w-full flex justify-center'>
                        <button className="btn btn-warning lg:w-2/3 border-none shadow-none my-5 ">Update Information <GrUpdate /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyProfile;