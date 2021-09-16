import { useEffect, useState } from "react";
import { getPosts } from "../services/firebase-api";

export default function usePosts(user) {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        async function getTimelinePosts() {
            if (user?.following?.length > 0) {
                const followedUsersPosts = await getPosts(user.userId, user.following);
                followedUsersPosts.sort((a,b) => b.created_at - a.created_at);
                setPosts(followedUsersPosts);
            }
        }
        getTimelinePosts();
    }, [user?.userId, user?.following]);
    
    return { posts };
}
