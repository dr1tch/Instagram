import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"
import Header from "../components/header";
import { getUserByUsername } from "../services/firebase-api";
import * as ROUTES from '../constants/routes';
import UserProfile from "../components/profile";

export default function Profile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const history = useHistory();
    useEffect(() => {
        document.title = `${username}'s profile photos and details`;
        (async function isUserExist() {
            const [user] = await getUserByUsername(username);
            user?.userId ? setUser(user) : history.push(ROUTES.NOT_FOUND);
        })();
    }, [username, history])
    return (
        <div className='bg-gray-background'>
        <Header />
        <div className='mx-auto max-w-screen-lg relative top-24'>
            <UserProfile user={user} />
        </div>
        </div>
    )
};
