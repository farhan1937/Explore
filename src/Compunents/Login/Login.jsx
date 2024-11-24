import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [showPassword, setShowPassword] = useState('')
    const [registerError, setRegisterError] = useState(' ')
    const [success, setSuccess] = useState(' ')
    const { googleLogin, signIN, notify2 } = useContext(AuthContext)
    const navigate = useNavigate();
    const add = useLocation();
    const handleLogin =e=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        setRegisterError(' ')
        setSuccess(' ')

        signIN(email, password)
        .then(result => {
            console.log(result.user);
            navigate(add?.state
                ? add.state
                : '/')
        })
        .catch(error => {
            if (error.code == "auth/invalid-email") {
                notify2('Provide a valid email')
            }
            else if (error.code == 'auth/invalid-credential') {
                notify2('Provide a valid password')
            }
            console.log(error);
        })
    }

     
    const handleGoogleSignIn = () => {

        googleLogin()
            .then(result => {
                
                console.log('LogIn ',result );
                
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        If You can not <Link to="/register"><span className="text-2xl text-green-500 underline">register</span></Link>, please register first
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input border-2 border-[#3498db] w-full " required />
                                <span className="absolute bottom-[160px] right-[40px]   " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex text-xl text-center mx-auto border-2 px-4 rounded-xl border-[#3498db] p-3">
                    <button onClick={handleGoogleSignIn} className="" ><FcGoogle /></button>
                    <h3>Continue with Google</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;