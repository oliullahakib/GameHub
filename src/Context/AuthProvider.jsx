import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateUser = (user,userObj)=>{
        return updateProfile(user,userObj);
    }
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    
    const value = {
        creatUser,
        loginUser,
        updateUser,
        googleLogin
    }
    return <AuthContext value={value}> {children}</AuthContext>
};

export default AuthProvider;