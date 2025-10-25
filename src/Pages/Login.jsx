import React, { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginUser, googleLogin } = use(AuthContext);
    const [email, setEmail] = useState('');
    const formRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(() => {
                toast.success("Login Successfully");
                e.target.reset();
                navigate(`${location?.state ? location?.state : "/"}`);
            })
            .catch((error) => {
                if (error.code === "auth/invalid-credential") {
                    toast.error('User Invalid!')
                };
            });
    }
    const handleGoogleLogin = () => {
        formRef.current.reset()
        googleLogin()
            .then(() => {
                toast.success("Login Successfully");
                navigate(`${location?.state ? location?.state : "/"}`);
            }).catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode);
            });
    }
    return (
        <div className="hero min-h-screen">
            <title>Game Hub - Login</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-[#2F3645] w-full md:min-w-96 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-6xl font-bold border-b border-base-200 pb-5 text-center oswald-font">Login Now!</h1>
                        <form ref={formRef} onSubmit={handleLogin} className="fieldset text-accent">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} required name='email' type="email" className="input" placeholder="Example@gamil.com" />
                            {/* password  */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input required name='password' type={show ? "text" : "password"} className="input" placeholder="Password" />
                                <span onClick={(e) => { e.preventDefault(), setShow(!show) }} className='absolute top-6 right-6 text-xl cursor-pointer'>
                                    {
                                        show ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>

                            <div><Link state={email} to={"/forgot-password"} className="link link-hover">Forgot password?</Link></div>
                            <button className="btn btn-primary text-black mt-4 ">Login</button>

                            <div className='flex items-center'>
                                <div className='w-1/2 h-px bg-base-200'></div>
                                <p className='mx-2'>or</p>
                                <div className='w-1/2 h-px bg-base-200'></div>
                            </div>
                            {/* Google */}
                            <button onClick={handleGoogleLogin} className="btn mb-2 bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p>Don't Have Account? Please <Link to={'/register'} className='text-blue-400 hover:text-blue-700 '>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;