import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Loading from '../Pages/Loading';

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateUser = (user, userObj) => {
        setLoading(true);
        return updateProfile(user, userObj);
    };
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOutUser = () => {
        return signOut(auth);
    };

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubcribe;
    }, [])

    const value = {
        creatUser,
        loginUser,
        updateUser,
        googleLogin,
        logOutUser,
        user,
        loading,
        setLoading,
        resetPassword
    }
    return <AuthContext value={value}> {loading?<Loading/>:children}</AuthContext>
};

export default AuthProvider;