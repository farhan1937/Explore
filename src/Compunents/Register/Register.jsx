import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser, notify, notify2 } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState(' ')
    const [success, setSuccess] = useState(' ')
    const [showPassword, setShowPassword] = useState(' ')

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photoURL.value
        const password = e.target.password.value
        console.log(name, email, photo, password);

        
        setRegisterError(' ')
        setSuccess(' ')

        if(!email){
            return notify2('Enter your email')
        }
        else if(!name){
            return notify2('Enter your Name')
            
        }
        else if(!photo){
            return notify2('Enter Your photoURL')
        }
        else if(!password){
            return notify2('Enter your password')
        }
        else if(!/(=?.*[A-Z])/.test(password)){
            return notify2('You must have upper case latter in your password')
        }
        else if(!/(=?.*[a-z])/.test(password)){
            return notify2('You must have lower case latter in your password')
        }
        else if(password.length < 6){
            return notify2('Your password length must be 6 letter')
        }
        

        createUser(email, password)
            .then(result => {
                notify('create successfully')
                console.log(result.user);
                updateProfile(result?.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(()=>{
                notify2('create unsuccessful')
            })
    }
    return (
        <div>
            <h2 className="text-4xl text-center mb-10 font-bold">Register <span className="text-[#3498db]">Page</span></h2>
            {/* <p className="text-xl underline text-center">If You can't register your accout .Please register first</p> */}
            <div className="flex flex-col lg:flex-row justify-center item-center w-full mt-5 gap-5 ">
                <div className="w-1/3 flex justify-center">
                    <img className="w-full  " src="https://imgbb.host/images/images8cf810ec81eb2aa1.png" alt="" />
                </div>
                <div className="grid justify-center border-2 rounded-lg p-5">
                    <h2 className="text-4xl font-semibold text-center mb-5 " >Regi<span className="text-[#3498db]">ster</span></h2>
                    <form onSubmit={handleRegister}>
                        <input className="p-3 w-full border-2 rounded-xl" type="text" name="" id="" placeholder="name" required /><br /><br />
                        <input className="p-3 w-full border-2 rounded-xl" type="email" name="" id="" placeholder="email" required /><br /><br />
                        <input
                            className=" w-full py-2 px-4 border-2  rounded-xl"
                            type={showPassword ? "password" : "text"}
                            placeholder="YOUR PASSWORD"
                            name="password"
                            id=""
                             />
                        <span className="absolute top-[450px] right-[280px] " onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </span><br /><br />
                        <input className="p-3  w-full  border-2 rounded-xl" type="url" name="" id="" placeholder="photoUrl" required /><br /><br />
                        <button className="btn p-3 w-full border-2 rounded-xl mx-auto font-semibold">Register</button>
                    </form>

                    <div>
                        <h3 className="font-bold text-center">If your account not register, please register your account then, </h3>

                    </div>
                    <h3>go back to <Link to="/login"><span className="text-2xl font-bold text-[#3498db] underline">Login</span></Link> page</h3>
                </div>
            </div>
        </div>
    );
};

export default Register;