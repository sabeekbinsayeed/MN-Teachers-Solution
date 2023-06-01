import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({ children }) => {
    const [user, setUser] = useState({})


    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, createUser, signIn, logOut, updateUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;