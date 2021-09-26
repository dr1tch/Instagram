import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user';
import { getUserByUserId, updateCurrentUserFollowings, updateFollowedUserFollowers } from '../../services/firebase-api';
export default function User({ user: {username, avatar, fullName, userId: currentUserId, docId: profileDocId}, loggedInUserDocId, userId}) {
    console.log('profileDocId :>> ', profileDocId);
    const [isFollowed, setIsFollowed] = useState(false);
    const { setUser } = useContext(UserContext);
    const handleFollow = async (event) => {
        event.preventDefault();
        setIsFollowed(true);
        // updateCurrentUserFollowings: update the active user following list.
        await updateCurrentUserFollowings(loggedInUserDocId, currentUserId, isFollowed);
        // updateFollowedUserFollowers:update the followed user followers list.
        await updateFollowedUserFollowers(userId, profileDocId, isFollowed);
        const [user] = await getUserByUserId(userId);
        setUser(user);
    }
    return (
        !isFollowed ? (
        <div className='flex items-center justify-between' >
            <div className='flex items-center gap-4 mb-5'>
                <Link to={`/${username}`} >
                    <img src={avatar} title={`Follow ${fullName}`} alt={`${fullName} profile`} className='rounded-full w-9 h-9' />
                </Link>
                <div>
                    <Link to={`/${username}`} >
                        <h1 className="font-bold text-sm">{username}</h1>
                    </Link>
                    <p className=' text-sm text-gray-400'>{fullName}</p>
                </div>
            </div>
            <button
                className="text-xs font-bold text-blue-medium"
                type="button"
                onClick={handleFollow}
            >
                Follow
            </button>
        </div> ) : null
    );
};
