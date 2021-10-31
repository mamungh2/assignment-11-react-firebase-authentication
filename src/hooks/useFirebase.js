import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingPopup = () => {
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(result => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return { user, signInUsingPopup, logOut, error, isLoading, setIsLoading };
};

export default useFirebase;