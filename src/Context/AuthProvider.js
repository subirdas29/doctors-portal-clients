import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut } from "firebase/auth";

export const AuthContext =createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
const createUser = (email,password)=>
{
    return createUserWithEmailAndPassword(auth, email, password)
}

const logIn = (email,password)=>
{
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUser= (userInfo)=>{
    return updateProfile(auth, userInfo)
}

const logOut = ()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
})
return()=>unsubscribe()}
,[])

const authInfo = {
    createUser,
    logIn,
    user,updateUser,logOut
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;