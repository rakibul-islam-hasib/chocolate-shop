import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase/firebase.init';
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user , setUser] = useState(null);
    const auth = getAuth(app);
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return ()=> unsubscribe();
    },[])
    const value = { signUp, loader }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;