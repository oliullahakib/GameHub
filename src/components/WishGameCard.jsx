import { GrInstallOption } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router';
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from '../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const WishGameCard = ({ app, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { gameId, title, category, iconImage, ratings, _id, downloadLink } = app;
    const handleWishGameDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wish-game/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Game has been remove from Wish List.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => console.log(err))
            }
        });
    }
    return (
        <div
        >
            <div className="card cursor-pointer bg-[#222831] border-b-2 border-primary px-3">
                <figure>
                </figure>
                <div className="flex flex-col  gap-5 my-5 px-1">
                    <div className=''>
                        <img className='w-20 h-20 md:h-20 md:w-20 rounded-md ' src={iconImage} alt={'icon'} />
                    </div>
                    <div>
                        <Link to={`/app-details/${gameId}`} className="card-title text-sm sm:text-lg min-h-10">
                            {title}
                        </Link>
                        <div className='min-h-5'>
                            <div className="text-accent flex ">{category}</div>
                        </div>
                        <p className='flex items-center'>{ratings} <span><IoStarSharp /></span></p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-3 '>
                        <Link to={downloadLink} className="btn  px-5 btn-primary text-black">Install <GrInstallOption /></Link>
                        <button onClick={() => handleWishGameDelete(_id)} className="btn px-5 btn-error text-black">Delete <RiDeleteBin5Fill /></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WishGameCard;