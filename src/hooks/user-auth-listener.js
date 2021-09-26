import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firbase";

// This hook will be called whenever the state of the authenticated user changes(signin, signout)
export default function useAuthListener() {
    const [user, setUser] = useState(null);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authenticatedUser) => {
            // if there is a user -> store it in local storage
            if (authenticatedUser) {
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                setUser(authenticatedUser);
            }
            // else remove the user from the local storage and user to null
            else {
                localStorage.removeItem("user");
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);

    return { user, setUser };
}