import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const { creatUser, updateUser, googleLogin } = use(AuthContext)
    const [show, setShow] = useState(false);
    const [passError, setPassError] = useState('');
    const [nameError, setNameError] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        // reset value 
        setPassError("");
        setNameError("");
        const displayName = e.target.name.value;
        const nameCheck = displayName.trim().length >= 5;
        if (!nameCheck) {
            return setNameError("Name must be at least 5 character")
        }
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // varification 
        // length check 
        const minLengthRegEx = /^.{6,}$/;
        if (!minLengthRegEx.test(password)) return setPassError("Length must be at least 6 character");
        // upperCase check 
        const upperCaseRegEX = /(?=.*[A-Z])/;
        if (!upperCaseRegEX.test(password)) return setPassError("Must have an Uppercase letter in the password");
        // lowerCase check 
        const lowerCaseRegEX = /(?=.*[a-z])/;
        if (!lowerCaseRegEX.test(password)) return setPassError("Must have a Lowercase letter in the password");
        creatUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const currentUser = userCredential.user;
                // update user 
                updateUser(currentUser, { displayName, photoURL })
                    .then(() => {
                        console.log("register", { currentUser });
                    }).catch((error) => {
                        console.log("update user: ", error)
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });
    }
    return (
        <div className="hero min-h-screen">
             <title>Game Hub - Register</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-[#2F3645] w-full min-w-96 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-6xl font-bold border-b border-base-200 pb-5 text-center oswald-font">Register Now!</h1>
                        <form onSubmit={handleRegister} className="fieldset text-accent">
                            {/* Name  */}
                            <label className="label">Name</label>
                            <input required name='name' type="text" className="input" placeholder="Name" />
                            <p className='text-red-400'>{nameError}</p>
                            {/* Photo URL  */}
                            <label className="label"> Photo URL </label>
                            <input required name='photo' type="text" className="input" placeholder=" Photo URL " />
                            {/* email  */}
                            <label className="label">Email</label>
                            <input required name='email' type="email" className="input" placeholder="Example@gamil.com" />
                            {/* password  */}
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input required name='password' type={show ? "text" : "password"} className="input" placeholder="Password" />
                                <span onClick={(e) => { e.preventDefault(), setShow(!show) }} className='absolute top-6 right-6 text-xl cursor-pointer'>
                                    {
                                        show ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                                <p className='text-red-400'>{passError}</p>
                            </div>

                            <button className="btn btn-secondary text-black mt-4 mb-2">Register</button>
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
                            <p>Already Have Account? Please <Link to={'/login'} className='text-blue-400 hover:text-blue-700 '>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;