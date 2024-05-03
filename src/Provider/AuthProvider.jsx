import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebaseConfig";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
            }
        })
    },[])

    const logOut = () =>{
        signOut(auth);
        console.log('log out');
    }

    const authInfo = {
        createUser,
        userLogin,
        user,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;