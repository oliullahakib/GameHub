import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateUser = (user,userObj)=>{
        return updateProfile(user,userObj);
    }
    const value = {
        creatUser,
        loginUser,
        updateUser
    }
    return <AuthContext value={value}> {children}</AuthContext>
};

export default AuthProvider;