import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const value = {
        creatUser,
        loginUser
    }
    return <AuthContext value={value}> {children}</AuthContext>
};

export default AuthProvider;