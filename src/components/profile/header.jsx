import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user';
import useUser from '../../hooks/use-user';
import * as ROUTES from '../../constants/routes';
import { isCurrentUserFollowingProfile, toggleFollow } from '../../services/firebase-api';

export default function Header({
    postsCount,
    followersCount,
    setFollowersCount,
    followingCount,
    profile : {
        docId: profileDocId,
        userId: profileUserId,
        fullName: fullname,
        followers,
        following,
        username: profileUsername,
        avatar,
    }

}) {

    const {user: currentUser} = useContext(UserContext);
    const { user } = useUser(currentUser?.uid);
    const [isFollowingProfile, setIsFollowingProfile] = useState(null);
    const activeBtnFollow = user?.username && user?.username !== profileUsername;
    const handleToggleFollow = async () => {
        setIsFollowingProfile(isFollowingProfile => !isFollowingProfile);
        setFollowersCount({
            followersCount: isFollowingProfile ? followersCount - 1 : followersCount + 1
        });
        await toggleFollow(
            isFollowingProfile, 
            user.docId,profileDocId,
            profileUserId,
            user.userId
            )
    }
    useEffect(() => {
        const isActiveUserFollowingProfile= async () => {
            const isFollowing = await isCurrentUserFollowingProfile(user.username, profileUserId);
            console.log('!!isFollowing :>> ', !!isFollowing);
            setIsFollowingProfile(!!isFollowing);
        }
        if(user?.username && profileUserId) isActiveUserFollowingProfile();
    }, [user?.username, profileUserId])

    return (
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="container flex justify-center items-center">
                {profileUsername ? (
                    <img src={avatar} alt={`${fullname}'s profile pic`}  className='w-40 h-40 rounded-full' />
                ):(
                    <Skeleton circle height={150} width={150} count={1} />
                )
                }
                
            </div>
            <div className="flex items-center justify-center flex-col col-span-2">
                <div className="container flex items-center gap-5">
                    {
                        profileUsername ? (<p className="text-3xl">{profileUsername}</p>) : (<Skeleton count={1} width={150} height={35} />)
                    }
                    {
                        activeBtnFollow && isFollowingProfile === null ? (
                            <Skeleton count={1} width={80} height={32} />
                        ) : (
                            activeBtnFollow ? (

                                <button 
                                    className={isFollowingProfile ? 
                                            'border rounded w-20 h-8 font-semibold text-sm text-gray-base hover:bg-gray-100'
                                            : 'bg-blue-medium font-semibold text-sm text-white rounded w-20 h-8 hover:bg-blue-600'
                                        
                                    } 
                                    onClick={handleToggleFollow}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleToggleFollow();
                                        }
                                    }}
                                >
                                    {isFollowingProfile ? 'Unfollow' : 'Follow'}
                                </button>
                            ) : (
                                <Link to={ROUTES.EDIT_PROFILE} className='flex items-center justify-center px-3 border rounded w-24 h-8 font-semibold text-sm text-gray-base hover:bg-gray-100' >Edit Profile</Link>
                            )
                        )
                    }
                </div>
                <div className='container flex mt-4'>
                    {
                        !followers || !following ? (
                            <Skeleton count={1} width={677} height={24} />
                        ) : (
                            <>
                                <p className="mr-10">
                                    <span className="font-bold">{postsCount}</span> posts
                                </p>
                                <p className="mr-10">
                                    <span className="font-bold">{followersCount}</span>
                                    {` `}
                                    {followersCount === 1 ? `follower` : `followers`}
                                </p>
                                <p className="mr-10">
                                    <span className="font-bold">{following?.length}</span> following
                                </p>
                            </>
                        )
                    }
                </div>
                <div className="container flex mt-4">
                    <p className="mr-10">
                        <p className="font-medium text-gray-800">{!fullname ? <Skeleton count={1} height={24} /> : fullname}</p>
                    </p>
                </div>
                <div className="container flex mt-1">
                    <p className="mr-10">
                        <span className="">{user?.biography}</span>.
                    </p>
                </div>
            </div>
        </div>
    )
};
