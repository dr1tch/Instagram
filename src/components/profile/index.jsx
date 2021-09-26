import Header from "./header";
import { useReducer, useEffect } from 'react';
import { getUserPostsByUserId } from '../../services/firebase-api';
export default function Profile({user}) {
    console.log('user :>> ', user);
    const reducer = (state, newState) => ({...state, ...newState});
    const initialState = {
        profile: {},
        posts: null,
        followersCount: 0
    };
    const [{profile, posts, followersCount}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileDetailsAndPosts() {
            const posts = await getUserPostsByUserId(user.userId);
            dispatch({ profile: user, posts: posts, followersCount: user.followers.length });
        }
        if(user?.userId) getProfileDetailsAndPosts();
    }, [user])
    return (
        <>
        <Header 
            profile={profile}
            postsCount={posts ? posts.length : 0}
            followersCount={followersCount}
            setFollowersCount={dispatch}
        />
        <h1>This is the profile of {user?.username}</h1>
        </>
    )
};
