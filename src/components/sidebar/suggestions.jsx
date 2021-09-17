import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import SuggestedUsers from "./suggested-users";
import { useEffect, useState } from "react";
import { getSuggestedUsers } from "../../services/firebase-api";
export default function Suggestions({following, userId}) {
    const [suggestions, setsuggestions] = useState([]);
    useEffect(() => {
       async function suggestedUsers() {
           let res = await getSuggestedUsers(userId, following);
           setsuggestions(res);
       }
       if(userId && following) suggestedUsers();
    }, [userId, following]);
    return (
        <div>
            <div className='flex items-center justify-between mb-3'>
                <h1 className="font-bold text-sm text-gray-400 mb-4">Suggestions For You</h1>
                <Link to={ROUTES.SUGGESTIONS} >
                    <p className="text-xs font-bold text-gray-900">See All</p>
                </Link>
            </div>
            {
                suggestions.length > 0 ? <SuggestedUsers suggestions={suggestions} /> : <Skeleton count={5} height={45} />
            }
        </div>
    )
}
