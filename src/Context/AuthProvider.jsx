import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateUser = (user, userObj) => {
        return updateProfile(user, userObj);
    };
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubcribe;
    }, [])

    const value = {
        creatUser,
        loginUser,
        updateUser,
        googleLogin,
        logOutUser,
        user
    }
    return <AuthContext value={value}> {children}</AuthContext>
};

export default AuthProvider;