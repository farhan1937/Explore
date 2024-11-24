import React, {  createContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoder] = useState(true)
    const notify = (toasts) => {
        toast(toasts, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }
    
    const notify2 = (toasted) => {
        toast.warning(toasted, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
    }

    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoder(true)
        return signInWithPopup(auth, GoogleProvider)

    }

    const signIN = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoder(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changes', currentUser);
            setUser(currentUser)
            setLoder(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authinfo ={
        notify,
        createUser,
        googleLogin,
        signIN,
        logOut,
        user,
        loader,
        notify2
    }


    return (
        <AuthContext.Provider value={authinfo}>
             <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"

        />

        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;