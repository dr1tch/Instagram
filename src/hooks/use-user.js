import { useEffect, useState } from "react";
import { getUserByUserId } from "../services/firebase-api";

export default function useUser(userId) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getUserObjByUserId = async(userId) => {
            const [user] = await getUserByUserId(userId);
            setCurrentUser(user || {});
        };
        if (userId) {
            getUserObjByUserId(userId);
        }
    }, [userId]);

    return { user: currentUser, setCurrentUser };
}