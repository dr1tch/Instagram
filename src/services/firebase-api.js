import { firebase, FieldValue } from "../lib/firebase";

// this function will verify if the username already exists in the database return true or false
export async function usernameAlreadyExists(username) {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();
    return result.docs.length > 0;
}

// get the user by his userId
export async function getUserByUserId(userId) {
    const res = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", userId)
        .get();
    return res.docs.map((item) => ({...item.data(), docId: item.id }));
}

// get the user by his username
export async function getUserByUsername(username) {
    const res = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();
    return res.docs.map((item) => ({...item.data(), docId: item.id }));
}

// get the posts of the users that the current user is following
// we need the id of the current user, the list of the users that he is following
export async function getPosts(userId, following) {
    // get all the posts of the users followed by the current user
    const res = await firebase
        .firestore()
        .collection("posts")
        .where("userId", "in", following)
        .get();
    console.log(`res`, res);

    const followedUserPosts = res.docs.map((post) => ({
        ...post.data(),
        docId: post.id,
    }));

    const postsWithUserDetails = await Promise.all(
        followedUserPosts.map(async(post) => {
            let liked = false;
            if (post.likes.includes(userId)) liked = true;
            const user = await getUserByUserId(post.userId);
            const { avatar, username } = user[0];
            return { username, avatar, ...post, liked };
        })
    );
    return postsWithUserDetails;
}

// getSuggestedUsers: get a list of suggested users for the current user to follow.
export async function getSuggestedUsers(userId, following) {
    console.log(`following`, following);
    console.log(`userId`, userId);
    let query = firebase.firestore().collection("users");
    if (following.length > 0) {
        query = query.where("userId", "not-in", [...following, userId]);
        console.log("if");
    } else {
        query = query.where("userId", "!=", userId);
        console.log("else");
    }
    const res = await query.limit(10).get();
    console.log(`res-sugg`, res);
    const suggestions = res.docs.map((user) => ({
        ...user.data(),
        docId: user.id,
    }));
    console.log(`suggestions`, suggestions);
    return suggestions;
}

// updateCurrentUserFollowings: update the active user following list.
export async function updateCurrentUserFollowings(
    currentUserDocId, // string: current active logged in user docId.
    profileId, // string: suggested profile id the current user want to follow.
    isFollowingProfile // boolean: if the active user is following the user or not.
) {
    // console.log(`updateCurrentUsersFollowings`);
    // console.log(`currentUserDocId`, currentUserDocId);
    // console.log(`profileId`, profileId);
    // console.log(`isFollowingProfile`, isFollowingProfile);
    return firebase
        .firestore()
        .collection("users")
        .doc(currentUserDocId)
        .update({
            following: isFollowingProfile ?
                FieldValue.arrayRemove(profileId) :
                FieldValue.arrayUnion(profileId),
        });
}

// updateFollowedUserFollowers:update the followed user followers list.
export async function updateFollowedUserFollowers(
    currentUserId, // string: current active logged in user id.
    profileDocId, // string: suggested profile docId the current user want to follow.
    isFollowingProfile // boolean: if the active user is following the user or not.
) {
    // console.log(`updateFollowedUserFollowers`);
    // console.log(`currentUserId`, currentUserId);
    // console.log(`profileDocId`, profileDocId);
    // console.log(`isFollowingProfile`, isFollowingProfile);
    return firebase
        .firestore()
        .collection("users")
        .doc(profileDocId)
        .update({
            followers: isFollowingProfile ?
                FieldValue.arrayRemove(currentUserId) :
                FieldValue.arrayUnion(currentUserId),
        });
}

// getUserPostsByUserId: get the posts of the user known by his userId
export async function getUserPostsByUserId(userId) {
    const res = await firebase
        .firestore()
        .collection("posts")
        .where("userId", "==", userId)
        .get();
    return res.docs.map((post) => ({
        ...post.data(),
        docId: post.id,
    }));
}

// isCurrentUserFollowingProfile: is the current user (active user) following this profile
export async function isCurrentUserFollowingProfile(
    currentUserUsername,
    profileUserId
) {
    const res = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", currentUserUsername) // joey: current (active) user username
        .where("following", "array-contains", profileUserId)
        .get();
    const [response = {}] = res.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    return response.userId;
}

export async function toggleFollow(
    isFollowingProfile,
    currentUserDocId,
    profileDocId,
    profileUserId,
    followingUserId
) {
    await updateCurrentUserFollowings(
        currentUserDocId, // Joey's doc ID
        profileUserId, // Rachel user ID
        isFollowingProfile // is Joey already following rachel? (true/false)
    );
    await updateFollowedUserFollowers(
        followingUserId, // Joey's user ID
        profileDocId, // Rachel doc ID.
        isFollowingProfile // is Joey already following rachel? (true/false)
    );
}