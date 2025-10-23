import React, { use, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const { resetPassword } = use(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState(location.state);
    // console.log(location,email)
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        resetPassword(email)
            .then(() => {
                toast.info('Password reset email sent!');
                window.open("https://mail.google.com/mail",'_blank');
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });
        // console.log("fogot password", email)
    }
    return (
        <div className="hero min-h-screen">
            <title>Game Hub - Forgot Password</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-[#2F3645] w-full min-w-96 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleForgotPassword} className="fieldset text-accent">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input required name='email' defaultValue={email} type="email" className="input w-full" placeholder="Example@gamil.com" />
                            <button className='btn btn-primary text-black w-40 my-3'>Reset Password </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;